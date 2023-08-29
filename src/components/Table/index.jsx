import React from 'react';
import styled from 'styled-components';

const TableWrap = styled.div`
    overflow: hidden;
    border-width: 1px 0;
    border-top: 2px solid #1f1f1f;
    border-bottom: 1px solid #dbdbdb;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    caption {
        font-style: normal !important;
        font-variant-ligatures: normal !important;
        font-variant-caps: normal !important;
        line-height: 0 !important;
        color: transparent !important;
        text-shadow: none !important;
        background-color: transparent !important;
        border: 0 !important;
        z-index: -1;
        border: 0;
        width: 1px;
        height: 1px;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        overflow: hidden;
        white-space: nowrap;
        display: inline-block;
        position: absolute;
    }
`;

const TableTitle = styled.p`
    margin-bottom: 10px;
    font-family: NanumSquareOTFEB;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: #1f1f1f;
`;

const TableMain = styled.table`
    width: calc(100% + 2px);
    table-layout: fixed;
    margin: 0 -1px -1px;
    text-align: left;
    th,
    td {
        height: 40px;
        padding: 10px;
        border: 1px solid #ededed;
        border-bottom: none;
        font-size: 14px;
        line-height: 1.5;
        vertical-align: middle;
        font-weight: 400;
        word-break: keep-all;
        background-color: white;
    }
    tr:first-child th,
    tr:first-child td {
    }
    th {
        text-align: center;
        background-color: #f8fafc;
        text-align: left;
        ${(props) =>
            props.redDot &&
            `
            &::after {
            margin-left: 2px;
            content: '';
            width: 4px;
            height: 4px;
            background-color: #e21f0b;
            border-radius: 20px;
            position: absolute;
        }
`}
    }
    thead {
        th {
            text-align: center;
        }
    }
    tbody tr:first-child td,
    tbody tr:first-child th {
    }
    .txt-algn-center {
        text-align: center;
    }
`;
const Table = (props) => {
    return (
        <>
            {props.title && <TableTitle>{props.title}</TableTitle>}
            <TableWrap>
                <TableMain redDot={props.redDot}>{props.children}</TableMain>
            </TableWrap>
        </>
    );
};
export default Table;
