import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Noto Serif KR' serif, 'NanumSquare', sans-serif;
    }

    html, body {
        overflow-x: hidden;
        font-family: 'NanumSquare';
    }
`

export default GlobalStyle;