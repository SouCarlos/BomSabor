
import { Container } from "./styled";
import { BiCaretLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
export function Backpage (){
    return(
        <Container>
            {/* <label htmlFor="back"></label> */}
            <Link to = '/manager' id="back"><BiCaretLeft /> VOLTAR</Link>
        </Container>
    )
}