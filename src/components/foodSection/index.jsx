
import { Container } from "./styled"
import { FoodList } from "./styled"
import { controllers } from "../../services/controllers/controllers"

export function FoodSection({title, path}){
    const foods = new controllers().getApi(path)
    return( 
        <Container>
            <h3>{title}</h3>
            <FoodList>
                {foods.map((item) => (
                    <li key={item.id}> 
                        <img src = {item.img} alt="" />
                        <p className="title">{item.name}</p>
                        <p className="value">{item.value} R$</p>
                        <p className="description">{item.description}</p>
                    </li>
                ))}
            </FoodList>
        </Container>
    )
}