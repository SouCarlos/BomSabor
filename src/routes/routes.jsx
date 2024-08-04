import { createBrowserRouter } from "react-router-dom";
import { Hamburgues } from "../pages/hamburgues";
import { Massas } from "../pages/massas";
import { Bebidas } from "../pages/bebidas";
import { App } from "../App";
import { LoginManager } from "../pages/loginManager";
import { Manager } from "../pages/manager";
import { EditManger } from "../pages/manager/EditManager";
import { InsertManager } from "../pages/manager/InsertManger";
import { ManagerHome } from "../pages/manager/managerHome";
import { Menulist } from "../pages/manager/MenuList";


export const AppRoutes = createBrowserRouter
(
    
    [
        {
            path: '/', 
            element: <App/>,
            children:[
                {
                    path: '/', element: <Hamburgues/>
                },
                {
                    path: '/bebidas', element: <Bebidas/>
                },
                
                {
                    path: '/massas', element: <Massas/>
                }
            ]
        },
        {
            path:'/login',
            element: <LoginManager/>
        },
        {
            path:'/manager',
            element: <Manager/>,
            children:[
                {
                    path: '/manager', element: <ManagerHome/>
                },
                {
                    path: '/manager/edit', element: <EditManger/>
                },
                {
                    path: '/manager/insert', element: <InsertManager/>
                },
                {
                    path: '/manager/menulist', element: <Menulist/>
                }
            ]
        }
        
        
    ]
)