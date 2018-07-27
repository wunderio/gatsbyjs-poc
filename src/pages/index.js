import React from 'react'
import Layout from '../components/Layout'
import { FormattedMessage } from 'react-intl'
import { withIntl } from '../i18n'

const HomePage = () => (
  <Layout title="Homepage">
    <h1><FormattedMessage id="hello" /></h1>
    <p><FormattedMessage id="welcome" /></p>
    <p><FormattedMessage id="build" /></p>
    <p><FormattedMessage id="loremipsum" /></p>
  </Layout>
)

export default withIntl(HomePage)