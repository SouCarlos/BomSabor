import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    display:flex;
    justify-content: center;
    flex-direction:column;
    color: white;
    font-size: 0.8rem;
    >h1{
        align-self: center;
        padding-top: 1rem;
    }
    >h2{
        align-self: center;
        padding-bottom: 1rem;
        font-size: 1.2rem;
    }
`

export const NavBar = styled.nav`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    >input{
        background: transparent;
        border: 1px solid blue;
        border-radius: 10px;
        width: 90%;
        height: 1.5rem;
    }
    >ul{
        width:100%;
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        border-bottom: 1px solid black;

        li{
            padding: 1em 0;
        }
    }
    /* color: white; */
`