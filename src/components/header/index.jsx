import { Container } from "./styled"
import {NavBar} from "./styled"
import { Link } from "react-router-dom";
export function Header(){
    return(
        <Container>
            <h1>BOM SABOR</h1>
            <h2>hamburgueria & pastelaria</h2>
            <NavBar>
                <input type="search" placeholder=" Oque procura" />
                <ul>
                    <li> <Link to='/'> HAMBURGUES </Link></li>
                    <li> <Link to = 'massas'> MASSAS </Link></li>
                    <li> <Link to = 'bebidas'> BEBIDAS </Link></li>
                </ul>
            </NavBar> 
        </Container>
)}