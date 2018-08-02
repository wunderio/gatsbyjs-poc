import React from "react";
import Link from "gatsby-link";

class WeAreHiring extends React.Component {
  render() {
    return (
      <div>
        <img src={ require("../assets/wundercon.jpg") } alt="" width="600" height="400" />
        <h3>We are hiring!</h3>
        <p>We are always on the lookout for new talent. Do the work you’ll be proud of and learn from others around you in a happy working environment.</p>
        <Link to="/careers">Careers</Link>
      </div>
    )
  }
}

export default WeAreHiring;
