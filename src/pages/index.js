import React from 'react'
import Layout from '../components/Layout'

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Layout
        title="Homepage"
        pathname={this.props.location.pathname}
        colourScheme="standard"
      >
        <h2>I'm the content on the front page!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          adipisci rerum iure inventore molestiae eius sequi officia consequatur
          accusamus aliquam? Aliquid accusantium dicta nihil, vero neque
          necessitatibus ut voluptatum autem?
        </p>
        <p>
          Velit optio a dolores. Dolores ducimus distinctio nostrum, sunt
          perferendis illum accusamus voluptatem fuga? Expedita deserunt,
          dignissimos nobis atque, perferendis pariatur omnis voluptate modi
          earum alias amet beatae sunt tempora!
        </p>
        <p>
          Minima animi labore consequuntur beatae assumenda deserunt
          perspiciatis, illo vel corrupti est distinctio commodi. Ab
          exercitationem aut, harum autem natus maiores! Deserunt velit maiores
          provident reiciendis veritatis soluta dignissimos! Architecto.
        </p>
      </Layout>
    )
  }
}
