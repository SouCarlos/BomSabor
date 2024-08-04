import { Container, Form } from "./styled.js"


export function LoginManager(){
    return(
        <Container>
        
            <h1>Login Conta Gerente </h1>
            <Form>
                <label htmlFor='user'> digite o seu usuario</label>
                <input  id = 'user' type = 'string' placeholder=""/>
                <label htmlFor='password'> digite sua senha</label>
                <input  id = 'password' type = 'password' placeholder=""/>
                <button>Entrar</button>
            </Form>
        </Container>
    )
}