import { Container } from "./styled";

export function Food(){
    return(
        <Container>
            <h4>{title}</h4>
            <p className="description">{description}</p>
            <p className="value">{value}</p>

        </Container>
    )
}