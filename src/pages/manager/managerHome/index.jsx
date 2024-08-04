import {Container, MenuManager} from "./styled"
import { Link } from "react-router-dom";
export function ManagerHome(){
    return(
        <Container>
            <h1>Gerenciamento do cardapio</h1>
            <MenuManager>
                <li> <Link to = 'insert' >ADICIONAR ITEM </Link></li>
                <li> <Link to = 'remove' >REMOVER ITEM</Link></li>
                <li> <Link to = 'edit' >EDITAR ITEM </Link></li>
                <li> <Link to = 'menulist' >VER ITENS DO CARDAPIO</Link></li>
            </MenuManager>
        </Container>
        
    )
}