/**
 *  Normalized styles, including:
 *    - normalize.css
 *    - 1rem = 10px (humans prefer base10 over base16, though 1.6rem on the body keeps the default at 16px)
 *    - Sane box-sizing; see https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
 */

import { injectGlobal } from 'styled-components'
import normalize from 'styled-normalize'

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
  /* End of normalization stuff, actual styling below */

  /* To style the body using styled components, we must inject it globally too */
  body {
    font-family: Helvetica, sans-serif;
    height: 100%;
  }
`
