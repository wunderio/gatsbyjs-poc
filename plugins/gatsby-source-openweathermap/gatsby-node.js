const crypto = require("crypto")
const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = ({ actions, createNodeId }, configOptions) => {
  const { createNode } = actions

  delete configOptions.plugins

  const processForecast = forecast => {
    const nodeId = createNodeId(`openweathermap-forecast-${forecast.id}`)
    const nodeContent = JSON.stringify(forecast)
    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex')

    const nodeData = Object.assign({}, forecast, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `OpenweathermapForecast`,
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    })

    return nodeData
  }

  const apiOptions = queryString.stringify(configOptions)

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?${apiOptions}`

  return (
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const nodeData = processForecast(data)
        createNode(nodeData)
      })
  )
}
