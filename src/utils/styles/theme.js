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

  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,800');
  @import url('https://fonts.googleapis.com/css?family=Hind:300,400,500');

  body {
    font-family: "Hind", Helvetica, Arial, sans-serif;
    line-height: 1.61;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Raleway", Helvetica, Arial, sans-serif;
    line-height: 1.04;
  }
`

const sizes = {
  small: 768,
  medium: 1024,
  large: 1200,
}

/**
 * The global 'theme' object.
 * Its values are analogous to global variables and mixins in sass.
 * This object can be accessed in any styled component by calling `props.theme`,
 * thanks to the <ThemeProvider /> component (which implements React's 'Context' API).
 * To use the theme in any other component (e.g. directly in render()), use the 'withTheme' method.
 */
export default {
  breakpoints: {
    pxValues: {
      ...sizes,
    },
    small: `all and (min-width: ${sizes.small / 16}em)`, // 768px at default font-size of 16px
    medium: `all and (min-width: ${sizes.medium / 16}em)`,
    large: `all and (min-width: ${sizes.large / 16}em)`,
  },
  colours: {
    grey: '#eff3f5',
    greySecondary: '#666666',
    greyDarker: '#c9d1d1',
    grayLight: '#e6ecee',
    mystic: '#f1f5f8',
    red: '#e20b61',
    darkHotPink: '#e50061',
    lipstick: '#b4004c',
    redDark: '#71003a',
    purple: '#350c4d',
    purpleDark: '#1d082d',
    cyan: '#23bcd9',
    cyanLight: '#00d5f7',
    orange: '#fd972b',
    orange2: '#ff9600',
    navy: '#021b35',
    white: '#ffffff',
    pizazz: '#ff9600',
    robinsEggBlue: '#00bddb',
    backgroundBlackenedBlue: '#02172c',
    backgroundDarkPurple: '#1d082c',
    purpleLight: '#cf93f9',
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
