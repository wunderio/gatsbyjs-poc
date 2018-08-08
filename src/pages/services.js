import React from 'react'
import Layout from 'templates/Layout'
import FeaturedItem from 'components/FeaturedItem';

export default class Contact extends React.PureComponent {
  render() {
    return (
      <Layout title="Services" colourScheme="standard">
        <p>Wunder is a full service digital agency, and one of Europe's largest Drupal agencies, with 140+ specialists across 5 countries. We deliver digital solutions designed to achieve our clients' goals and fulfil the needs of their customers/users</p>

        <FeaturedItem
          bg="red"
          align="left"
          title="Data, Design and Agile Development"
          body="If you’re looking to evolve your online services, Wunder is where user research, data-driven decision making, service design, and super smart development come together."
          img_path="services-pad.png"
          link_url="/services/design"
        />

        <FeaturedItem
          bg="blue"
          title="Our Technology Approach"
          body="Our knowledge of Drupal and peripheral open-source technologies gives us the power to constantly find new potential in everyday technology."
          img_path="wunder-drupal.png"
          link_url="/services/technolgy"
        />
      </Layout>
    )
  }
}
