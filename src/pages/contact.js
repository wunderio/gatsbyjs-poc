import React from 'react'
import Layout from '../components/Layout'

export default class NewPage extends React.PureComponent {
  render() {
    return (
      <Layout title="Contact Us" pathname={this.props.location.pathname} colourScheme="standard">
        <h2>Contact Us</h2>
        <h3>Want to talk about your next project?</h3>
        <form name="contact" id="contact" netlify>
            <p>
                <input name="first-name" id="first-name" placeholder="First name" />
                <input name="last-name" id="last-name" placeholder="Last name" />
            </p>
            <p>
                <input name="company-name" id="company-name" placeholder="Company name" />
            </p>
            <p>
                <textarea name="message" id="message" placeholder="Message..." />
            </p>
            <p>
                <input type="checkbox" name="data-handling-approve" id="data-handling-approve" />
                I approve that Wunder processes my personal data according to its <a href="/privacy-policy" target="_blank">Privacy Policy</a>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
      </Layout>
    )
  }
}
