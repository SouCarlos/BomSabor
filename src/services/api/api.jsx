import axios from "axios";
 
const api = axios 

export function instanceApi(){
    return axios.create({
        baseURL: 'http://localhost:3333'
    })
}
export function imgApi(){
    return axios.create({
        baseURL: 'http://localhost:3000'
    })
} 
