import { Header } from './components/header/index.jsx'
import { Outlet } from 'react-router-dom'

export function App(){
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}