import { Bebidas } from "../../bebidas"
import { Hamburgues } from "../../hamburgues"
import { Massas } from "../../massas"
import { Container } from "./styled"
import { Backpage } from "../../../components/backpage"

export function Menulist(){
    return(
        <Container>
            <Backpage/>
            <Bebidas/>
            <Hamburgues/>
            <Massas/>
        </Container>
    )
}