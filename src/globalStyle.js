import {createGlobalStyle} from "styled-components";


export const GlobalCss = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color:black;    
    }

    body{
        font-family: "Roboto Condensed", sans-serif;
        width: 100vw;
        height: 100vh;
        padding: 0 1rem;
        background-repeat: no-repeat;
        background-size: cover;
        font-weight:700;
    }
    a{  
        text-decoration: none;
    }


`
