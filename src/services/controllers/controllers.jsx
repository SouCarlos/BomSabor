import { useEffect, useState } from "react"
import { instanceApi, imgApi } from "../api/api"


export class controllers{
    getApi(path){
       const [food, setFood] = useState([])
       const [isloading, setLoading] = useState(true)

       useEffect(()=>{
        const getFood = async()=>{
            const {data} = await instanceApi().get(`${path}`)
            setFood(data)
            console.log(data)
            setLoading(false)
        }
        getFood()
       },[])
       if(isloading){
        const vazio = []
        return vazio
       }
       return food
    }

    Post(newFood, path){
        const postFood = async()=>{
            await instanceApi().post(`/${path}`, newFood) 
            await imgApi().post('/images', newFood.img)
        }
        postFood()
    }
}