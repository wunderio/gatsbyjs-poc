import React from "react";
import { Link } from "gatsby";
import CookieConsent from "react-cookie-consent";

class SiteCookieConsent extends React.Component {
  render() {
    return (
      <CookieConsent
        // debug={true} // Uncomment to enable debugging.
        location="bottom"
        buttonText="Close"
        cookieName="siteCookieConsent"
        // All styling props at https://github.com/Mastermindzh/react-cookie-consent#props
      >
        This website uses cookies to ensure you get the best experience on our website. By continuing to browse the site, you are agreeing to our use of cookies. <Link style={{ color: "#e20b61" }} to="/privacy-policy">Learn more</Link>{" "}
      </CookieConsent>
    )
  }
}

export default SiteCookieConsent;
