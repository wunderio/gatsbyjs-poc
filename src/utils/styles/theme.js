import { injectGlobal } from 'styled-components'
import normalize from 'styled-normalize'

/**
 *  Global styles are injected here, including:
 *    - normalize.css
 *    - 1rem = 10px (humans prefer base10 over base16, though 1.6rem on the body keeps the default at 16px)
 *    - Sane box-sizing; see https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
 *    - Global styles that we want to apply everywhere, like font-family etc
 */
injectGlobal`
  ${normalize}

	html {
    font-size: 62.5%;
    box-sizing: border-box;
	}
	*, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.6rem;
		margin: 0;
    padding: 0;
  }
  /* End of normalization stuff, actual theming below */

  @import url('https://fonts.googleapis.com/css?family=Raleway');
  @import url('https://fonts.googleapis.com/css?family=Hind');

  body {
    font-family: "Hind", Helvetica, Arial, sans-serif;
    line-height: 1.61;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Raleway", Helvetica, Arial, sans-serif;
  }

  h1 {
    font-size: 5.9rem;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 2.5rem;
  }
  h4 {
    font-size: 2.5rem;
  }
  h5 {
    font-size: 2.2rem;
  }
  h6 {
    font-size: 2rem;
  }
  p, ol, ul {
    margin: 1.18 0;
  }
`

/**
 * These are analogous to global variables and mixins in sass.
 * They're made available throughout the app thanks to the <ThemeProvider /> component.
 * This object can be accessed in any component by calling `props.theme`.
 */
const theme = {
  breakpoints: {
    small: `all and (min-width: ${768 / 16}em)`, // 768px at default font-size of 16px
    medium: `all and (min-width: ${1024 / 16}em)`, // 1024px
    large: `all and (min-width: ${1200 / 16}em)`, // 1200px
  },
  colours: {
    grey: '#EFF3F5',
    greySecondary: '#666666',
    greyDarker: '#C9D1D1',
    grayLight: '#E6ECEE',
    mystic: '#f1f5f8',
    red: '#E20B61',
    darkHotPink: '#e50061',
    lipstick: '#B4004C',
    redDark: '#71003A',
    purple: '#350C4D',
    purpleDark: '#1D082D',
    cyan: '#23BCD9',
    cyanLight: '#00D5F7',
    orange: '#FD972B',
    orange2: '#FF9600',
    navy: '#021b35',
    white: '#FFFFFF',
    pizazz: '#FF9600',
    robinsEggBlue: '#00BDDB',
    backgroundBlackenedBlue: '#02172c',
    backgroundDarkPurple: '#1d082c',
    purpleLight: '#CF93F9',
    purpleDarker: '#7200cc',
    textGray: '#666666',
    green: '#00ae9f',
  },
  layout: {
    maxBodyWidth: '110rem',
  },
  typography: {
    defaultLineHeight: '1.61',
    headingFontFamily: '"Raleway", Helvetica, Arial, sans-serif',
    baseFontFamily: '"Hind", Helvetica, Arial, sans-serif',
  },
}

export default theme
