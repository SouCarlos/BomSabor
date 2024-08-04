import { Container } from "./styled"
import { Outlet } from "react-router-dom"


export function Manager(){
    return(
        <Container>   
            <Outlet/> 
        </Container>
        )
}