# Gatsby / Headless CMS PoC

This project aims to use one or more data sources for content and present them in a React powered front-end.

# Installation

## Install Gatsby's command line tool

```
npm install --global gatsby-cli
```

## Install yarn

```
brew install yarn
```

## Get the source code

```
git clone https://github.com/wunderio/gatsbyjs-poc
cd gatsby-poc
```

## Install dependencies

`yarn install`

## Get going!

`gatsby develop`

Point your browser at `http://localhost:8000` (defaults to port 8000)

# Resources

- [GraphQL fundamentals](https://www.howtographql.com/basics/0-introduction/)
- [Gatsby v2 beta plugins](https://next.gatsbyjs.org/plugins/)

# Overview of key features and findings

## Internationalization (i18n)

There are a few options available but broadly can be considered as:

1. Language negotiation: How can we detect the language a user wants
2. Content translation: How does content get translated and returned to the front-end?
    - Best to delegate content authoring and delivery to the backend CMS. Gatsby/React can ask for what it wants and supply an optional language code derived from the language negotiation process.
3. Localization (l9n): How does the page adapt (layout or content) based on the locale specified?
    - https://github.com/angeloocana/gatsby-plugin-i18n can help with this. You'll need to make your React components and layouts aware of language variants and have them adapt accordingly.

### Other considerations:

- Content compilation: small sites can use Markdown files with one variant per langcode, but larger sites should be requesting content over an API. You will need to amend `gatsby-config.js` to understand how to map langcodes to known content and generate a rendered page for each.

### Recommended plugins:

- https://github.com/wiziple/gatsby-starter-default-intl: a slightly forked version of the default Gatsby plugin for internationalization.
- https://github.com/angeloocana/gatsby-plugin-i18n: offers a more React-centric approach to translation and illustrates how to pass in localized data to them.

## Connecting to your data

- Drupal 8
    - Install `json` and `json_extras` modules.
    - Install `gatsby-source-drupal` plugin for Gatsby.
- REST / other APIs
    - Install `gatsby-source-apiserver` and provide it with a URL to the API and state whether data will be saved to a local file or not.

## Content editing/publishing workflow

- Sites hosted on Netlify receive a built hook; a request to this will initiate a fresh build of the site.
- The backend CMS will need to respond to suitable content CRUD operations and trigger a build in order to publish new content to the Gatsby powered frontend.

Sites not using Netlify will need to be able to use a service that can respond in a similar manner to the CMS events and trigger a build + deploy process.

## Gatsby and CI tools

- Something about Circle CI?

## Gatsby + React

- Any tips/pointers?

## Gatsby and Lando

- TBC

## Hosting

We recommend using Netlify for a number of reasons:

- It offers features such as forms, URL redirects and AWS Lambda.
- It provides DNS management, CDN/security layer and SSL.
- It makes deployment really, really easy.
- It is well supported and documented.
- It integrates well with CI services such as Circle CI.

### Roll your own solution

If Netlify isn't suitable, you need to consider how to cater for things such as URL redirects, sitemaps, forms and integrate with existing CI services or other infrastructure.

A simple site could easily work by compilation happening locally or within Jenkins and the deployment artifact being securely copied to an AWS S3 instance sitting behind Cloudfront or Cloudflare.

https://www.ximedes.com/2018-04-23/deploying-gatsby-on-s3-and-cloudfront is a good example of how a simple site can be run on a serverless Amazon platform where content is generated on a build server, stored in an S3 bucket and served from Cloudfront in tandem with AWS Lambda to handle redirects and set any necessary security headers.