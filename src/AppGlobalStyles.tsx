import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
        margin: 0;
        padding: 0;

        * {
            font-family: 'Open Sans', sans-serif;
        }
    }

    body {
        margin: 0;
        min-height: 100vh;
        overflow-y: scroll;
    }

    div {
        height: auto;
        width: 100%;
    }

    #root {

    }

    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        font-family: 'Open Sans', sans-serif;
        box-sizing: border-box;
    }

    /* HTML5 display-role reset for older browsers */

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
        font-family: 'Open Sans', sans-serif;
    }

    body {
        line-height: 1;
    }

    ol,
    ul {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;
    }

    blockquote {
        &:before,
        &:after {
            content: "";
            content: none;
        }
    }

    q {
        &:before,
        &:after {
            content: "";
            content: none;
        }
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    h1 {
        font-size: 36px;
        line-height: 40px;
    }

    h2 {
        font-size: 30px;
        line-height: 40px;
    }

    h3 {
        font-size: 24px;
        line-height: 40px;
    }

    h4 {
        font-size: 18px;
        line-height: 20px;
    }

    /* Won't be used here */

    h5 {
        font-size: 14px;
        line-height: 20px;
    }

    h6 {
        font-size: 12px;
        line-height: 20px;
    }
`;
