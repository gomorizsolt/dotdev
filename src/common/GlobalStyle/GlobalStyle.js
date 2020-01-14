import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Apercu Regular';
		src: url('static/fonts/apercu/Apercu_Regular.woff');
		font-weight: normal;
		font-display: auto;
		font-style: normal;
	}

	@font-face {
		font-family: 'Apercu Regular';
		src: url('static/fonts/apercu/Apercu_Bold.woff');
		font-weight: 600;
		font-display: auto;
		font-style: normal;
	}

	@font-face {
		font-family: 'Apercu Regular';
		src: url('static/fonts/apercu/Apercu_Light.woff');
		font-weight: 200;
		font-display: auto;
		font-style: normal;
	}

	html, body {
		-webkit-font-smoothing: antialiased;
		font-feature-settings: "kern" 1,"kern";
		font-kerning: normal;
		text-rendering: optimizeLegibility;
		font: normal 14px 'Apercu Regular';
	}

	body {
		width: 100%;
		height: 100%;
		transition: background 1s;
		background: ${props => props.theme.background};
		color: ${props => props.theme.color};
		font-family: 'Apercu Regular';
		font-size: 14px;
		font-weight: normal;

		&>div{
			overflow: hidden;
		}
		
		a {
			color: ${props => props.theme.color};
		}
	}
`;
