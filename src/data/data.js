// Ultimately, we want to pull most site data from a CMS (such as Drupal).
// For now, I'm putting that sort of data into this file.
// Eventually I hope to convert this into graphql queries in the components where they're needed.

const legalLinks = {
  privacyPolicy: {
    text: 'Privacy Policy',
    link: 'privacy-policy',
  },
  copyright: {
    text: 'Copyright',
    link: 'copyright',
  },
  termsOfUse: {
    text: 'Terms of Use',
    link: 'terms-of-use',
  },
}

export { legalLinks }
