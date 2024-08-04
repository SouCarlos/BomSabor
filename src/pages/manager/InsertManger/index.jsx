import {Container, Form} from './styled'
import { controllers } from '../../../services/controllers/controllers'
import { Backpage } from '../../../components/backpage'
import fs from 'fs'
import path from 'path'


export function InsertManager(){
    function food(e){
        e.preventDefault()
        const foods = new FormData(e.target)
        const newFood = Object.fromEntries(foods.entries())
        new controllers().Post(newFood, newFood.plateType)
    }

    return(
        <Container>
            <Backpage/>
           <Form onSubmit={food}>
                <label htmlFor="plateName">Nome do prato que deseja adicionar ao cardapio
                    <input id='plateName' name='name' type="text" placeholder='exem. lasanha de camarao'/> 
                </label>
                <label htmlFor="plateDescription">descricao do prato
                    <textarea id='plateDescription' name='description' type="text" placeholder='exem. prato para 2 pessoas'/>
                </label>
                <label htmlFor="plateValue">valor do prato
                    <input id='plateValue' name='value' type="text" placeholder='14 $'/>
                </label>
                <label htmlFor="platetype">
                    Tipo do Prato
                    <select id="plateType" name="plateType">
                        <option value="massa">Massa</option>
                        <option value="hamburgue">burguer</option>
                        <option value="bebida">bebidas</option>
                    </select>
                    
                </label> 
                <input id='img' type='file' name='img' />   
                <button type='submit'>Salvar</button>
                </Form>
        </Container>
    )
}