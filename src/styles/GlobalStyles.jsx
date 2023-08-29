import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import DateIcon from '../assets/images/calender.png';

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
    input[type="date"]::-webkit-calendar-picker-indicator,
    input[type="date"]::-webkit-inner-spin-button {
        display: none;
        appearance: none;
    }

    input[type="date"]::-webkit-calendar-picker-indicator {
        color: rgba(0, 0, 0, 0);
        opacity: 1;
        display: block;
        background: url(${DateIcon}) no-repeat 100% 50%;
        width: 30px;
        height: 30px;
        border-width: thin;
    }
`;

export default GlobalStyles;
