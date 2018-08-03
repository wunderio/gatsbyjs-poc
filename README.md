# Gatsby / Headless CMS PoC

This project aims to use one or more data sources for content and present them in a React powered front-end.

# Installation

## Install yarn

```
brew install yarn
```

## Get the source code

```
git clone https://github.com/wunderio/gatsbyjs-poc
cd gatsbyjs-poc
```

## Install dependencies

```
yarn
```

Note: Be sure to use `yarn` (not npm) to install any other packages in the future, and commit the `yarn.lock` file to ensure the dependency tree is kept in sync.

## Get going!

```
yarn dev
```

Point your browser at `http://localhost:8000` (defaults to port 8000). Hot-reloading and helpful error messages are enabled by default.

# Resources

- [GraphQL fundamentals](https://www.howtographql.com/basics/0-introduction/)
- [Gatsby v2 beta plugins](https://next.gatsbyjs.org/plugins/)

# Application Overview

## General App Structure

Here is the general structure of the repo:

```bash
bash-3.2$ tree -a -L 2 -I 'node_modules|.DS_Store|.git'
.
├── .cache                # Gatsby uses this for faster rebuilds
│   └── [...various files]
├── .circleci
│   └── config.yml
├── .gitignore
├── .prettierrc
├── .vscode
│   └── extensions.json
├── README.md
├── gatsby-config.js      # Gatsby plugins and site metadata are declared here
├── gatsby-node.js        # Any dynamic page generation, webpack config, or similar build-time behaviour is defined here
├── package.json
├── public                # This is where Gatsby outputs its built files
│   └── [...various files]
├── src
│   ├── assets            # Assets such as images are here (they're NOT automatically optimised, but check out the plugin 'gatsby-image' for example)
│   ├── components        # All non-template components are here
│   ├── data              # This holds local data used in this prototype app; when fetching becomes external only, this can be deleted
│   ├── pages             # Files here will automatically get their own URL that matches the filename
│   ├── templates         # React components which serve as page templates are kept here. See `The 'Layout' Component`, below
│   └── utils             # This holds `theme.js` (check the theming section below); other helper functions should go here if they're needed
└── yarn.lock             # Remember to commit this when any packages get added/updated
```

Gatsby v2 is actually quite flexible in terms of how the app is structured. Regarding the `src` folder, only the `pages` folder is a Gatsby default requirement; anything else can be moved around with minor changes to `import` statements, and the contents of `gatsby-config.js` and `gatsby-node.js`. However, this structure seems to work well, so I'd expect the only changes would be to add subfolders where appropriate, as the number of files grows.

## Styled Components

[Styled Components](https://github.com/styled-components/styled-components) is used for theming - it works really well with React components, and Gatsby is no exception.

`theme.js`, in `src/utils` is where all the 'general' theming takes place that's not specific to any particular component. The file itself is quite well-commented - so read there - but in general it does the following:

- Injects global styles that apply site-wide, including normalize.css, 1rem=10px and 1em=16px, sane box-sizing, and very general font-family/line-height importing and applying.
- Exports a global 'theme' object. Its values are roughly analogous to global variables and mixins in sass. For example, colours and media queries are defined here. This object can be accessed in any styled component by calling `props.theme`, thanks to the `<ThemeProvider />` component (which implements React's 'Context' API under-the-hood). Note that if a React component that is _not_ a styled component needs to access the theme, this can be achieved by using the `withTheme` higher-order-component, as described [here](https://www.styled-components.com/docs/advanced#getting-the-theme-without-styled-components).

In components themselves, almost every element referenced in JSX is itself a a styled component. Let's take `Title` from `BlogListItem.js` as an example:

```js
const Title = styled.h2`
  font-size: 2.2rem;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colours.navy};

  ${WrappingLink}:hover & {
    color: ${({ theme }) => theme.colours.cyan};
  }
`
```

- ^ This is an h2, but referenced in the JSX as `<Title />` (this feature makes components' render methods much easier to understand at a glance). It uses the global theme object explained above in order to reference the colours it needs. In styled-components, this is done via an arrow function which receives props, of which `theme` is one of them.
- This component uses a great feature of styled-components called the [Component Selector pattern](https://www.styled-components.com/docs/advanced#referring-to-other-components). This allows you to refer to other styled components inside a different selector, making things like styling based on an element's parent possible from the component itself. Check [this commit](https://github.com/wunderio/gatsbyjs-poc/commit/e267fef90396451ae8b31a3265064325e1ce3f66) for an example of how this pattern can improve CSS readability.

## The 'Layout' Component

As described in the 'General App Structure' section, the `templates` folder holds components that describe the layout of a whole page (e.g. `blog-post.js` defines the layout and styling of blog post content). `Layout.js` is special in that it wraps _every_ page, and is loosely similar to `App.js` in `create-react-app`. Here's a quick breakdown of what this component does:

- Manages basic `<head>` data such as title and description using `react-helmet` (this will be overwritten by any more nested Helmet components)
- Provides a consistent Header and Footer, and passes any children to the `<Main />` component, which provides consistent padding, margin, and max-widths for content (these can be overwritten if required).
- Wraps everything in a `<ThemeProvider>` component. As described in the section above, this component makes the global object exported in `theme.js` available from anywhere.

# Overview of key features and findings

## Internationalization (i18n)

There are a few options available but broadly can be considered as:

1.  Language negotiation: How can we detect the language a user wants
2.  Content translation: How does content get translated and returned to the front-end?
    - Best to delegate content authoring and delivery to the backend CMS. Gatsby/React can ask for what it wants and supply an optional language code derived from the language negotiation process.
3.  Localization (l9n): How does the page adapt (layout or content) based on the locale specified?
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

In general, if you're familiar with React and the surrounding ecosystem (ES6+ etc) then it's not a huge jump to being productive with Gatsby. There are just a few minor things for developers to be aware of:

- As I write this, Gatsby v2 is in beta and the docs are _mostly_ quite good and up-to-date. However, many of the code examples and other resources still reference v1, which is quite different. And there has already been discussions by Kyle Mathews (Gatsby's creator) about v3. So, always be aware which version any examples/tutorials are using.
- Many packages you might wish to use work great with Gatsby. But, some of them require a plugin to work. In general when you add a package it's worth searching the plugins section of the Gatsby docs, to see if there's one available.
- Gatsby uses webpack under-the-hood. This can be modified as described [here](https://next.gatsbyjs.org/docs/add-custom-webpack-config/) though be aware that there's often a plugin available for whatever you need to do.
- You might be used to rendering different components depending on the window width (e.g. a mobile component or a desktop component), if they're sufficiently different and it's cleaner to do so. This works great in something like create-react-app, because the DOM is generated on the client - so it 'knows' which version to mount. With Gatsby, however, it has no way of knowing the client's screen size at build time. So if you take this approach there may be a very brief flash of the 'wrong' component before the 'correct' one gets mounted. Personally I don't think this is a problem but worth mentioning. Solutions: prefer CSS media queries instead, or minimise the issue by defaulting to the most common screen size variant based on analytics data.

## Gatsby and Lando

- TBC

## Hosting

We recommend using Netlify for a number of reasons:

- It offers features such as forms, URL redirects and AWS Lambda.
- It provides DNS management, CDN/security layer and SSL.
- It makes deployment really, really easy.
- It is well supported and documented.
- It integrates well with Github and CI services such as Circle CI.

### Roll your own solution

If Netlify isn't suitable, you need to consider how to cater for things such as URL redirects, sitemaps, forms and integrate with existing CI services or other infrastructure.

A simple site could easily work by compilation happening locally or within Jenkins and the deployment artifact being securely copied to an AWS S3 instance sitting behind Cloudfront or Cloudflare.

https://www.ximedes.com/2018-04-23/deploying-gatsby-on-s3-and-cloudfront is a good example of how a simple site can be run on a serverless Amazon platform where content is generated on a build server, stored in an S3 bucket and served from Cloudfront in tandem with AWS Lambda to handle redirects and set any necessary security headers.

## Forms

We recommend using Netlify as you only need to add a few attributes to your form elements for this to work: https://www.netlify.com/docs/form-handling/

Interesting case study regarding forms, comments and Slack notifications: https://jamstack-comments.netlify.com/about/

One alternative for static sites is to use AWS Lambda and AWS Simple Email Service (SES) as per https://medium.com/calyx/serverless-contact-forms-with-aws-lambda-79959cd1a6cd.

Other options include Zapier, FormKeep or 99inbound or even an endpoint defined by Drupal/your backend CMS that can handle the submission. Many options exist.
