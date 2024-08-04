import styled from "styled-components";

export const Container = styled.section`
margin: 3rem .5rem;
max-width: screen;


` 
export const Form = styled.form`
display: grid;
grid-template-columns: 1fr 1fr ;
grid-template-rows: (4, auto);
grid-gap: .5rem;
margin: 0 center;
align-items:center;
>label:nth-child(1) {
    grid-column: span 2;
    >input{
        margin-top: .5rem;
        width: 70%;
        padding: .2rem;
    }  
}
>label:nth-child(2) {
    width: 100%;
    grid-column: span 2;
    >textarea{
        margin-top: .5rem;
        width: 100%;
        padding: .2rem;
        margin-right: 2rem;
    }  
}


#plateName{
    grid-column: span 2;
}
#plateDescription{
    grid-column: span 2;
}
`
