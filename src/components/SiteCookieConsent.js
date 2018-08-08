import React from "react";
import { Link } from "gatsby";
import CookieConsent from "react-cookie-consent";

class SiteCookieConsent extends React.Component {
  render() {
    return (
      <CookieConsent
        // Styling options listed at https://github.com/Mastermindzh/react-cookie-consent#props
        location="bottom"
        buttonText="Close"
        cookieName="siteCookieConsent"
      >
        This website uses cookies to ensure you get the best experience on our website. By continuing to browse the site, you are agreeing to our use of cookies. <Link to="/privacy-policy">Learn more</Link>{" "}
      </CookieConsent>
    )
  }
}

export default SiteCookieConsent;
