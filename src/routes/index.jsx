import { BrowserRouter,Route,Router,RouterProvider } from "react-router-dom";
import { AppRoutes } from "./routes";

export function Routes(){
    return(
        <RouterProvider router = {AppRoutes}/>
    )
}