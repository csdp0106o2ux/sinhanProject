import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p,
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
    }
    body{
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: ${(props) => props.theme.white};
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    .scrollbar {
        overflow-y: scroll; /*  */
    }

    /* 스크롤바의 폭 너비 */
    .scrollbar::-webkit-scrollbar {
        width: 4px;
        height: 48px;
    }

    .scrollbar::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .scrollbar::-webkit-scrollbar-track {
        background: white;
        /*스크롤바 뒷 배경 색상*/
    }
`;

export default GlobalStyles;
