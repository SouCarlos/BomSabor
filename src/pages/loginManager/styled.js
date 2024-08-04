import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  margin: auto;
  flex-direction: column;
  padding: 5rem 0;
  justify-content:center;
  align-items:center;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    max-width: 30rem;
    padding-top:2rem;

    >#user{
        margin-bottom: 1rem;
    }
    >button{
      margin-top: .5rem;
    }
`