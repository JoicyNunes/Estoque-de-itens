import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    font-family: 'Reddit+Mono', sans-serif;
}

body{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #fff;
}

`;

export default Global;