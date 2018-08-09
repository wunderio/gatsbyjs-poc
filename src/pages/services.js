import React from 'react'
import Layout from 'templates/Layout'
import FeaturedItem from 'components/FeaturedItem';

export default class Contact extends React.PureComponent {
  render() {

    // @todo: Pull the featured items content programmatically from services content
    // @todo: need to first figure out how to control the order and only print certain content instead of everything.

    const subtitle = "Wunder is a full service digital agency, and one of Europe's largest Drupal agencies, with 140+ specialists across 5 countries. We deliver digital solutions designed to achieve our clients' goals and fulfil the needs of their customers/users";
    return (
      <Layout title="Services" introText={subtitle} colourScheme="standard">

        <FeaturedItem
          bg="white"
          align_content="left"
          title="Data, Design and Agile Development"
          body="If you’re looking to evolve your online services, Wunder is where user research, data-driven decision making, service design, and super smart development come together."
          img_path="services/services-pad.png"
          link_url="/services/design"
        />

        <FeaturedItem
          bg="navy"
          align_content="right"
          title="Our Technology Approach"
          body="Our knowledge of Drupal and peripheral open-source technologies gives us the power to constantly find new potential in everyday technology."
          img_path="services/wunder-drupal.png"
          link_url="/services/technology"
        />

        <FeaturedItem
          bg="red"
          align_content="left"
          title="Continuous Development"
          body="Continuous development is the process in which we deliver long-term technical solutions within short development cycles.."
          img_path="services/continuous_development.png"
          link_url="/services/continous-development"
        />
      </Layout>
    )
  }
}
