import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items:center;
    justify-content:center;
    width:100%;
    margin-top: 3rem;
    flex-direction:column;


`
export const MenuManager = styled.ul`
    display: flex;
    flex-direction: column;
    align-items:center;
>li{
    list-style-type: none;
        a{
        display:block;
        background:transparent;
        border:none;
        text-decoration:none;    
        cursor: pointer;
        margin: .5rem;
        border: 1px solid #000000;
        padding: .2rem;
        border-radius: .5rem;

}}


`