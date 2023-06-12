// @ts-nocheck
import { writable } from "svelte/store";
const {subscribe,set,update} = writable([])


const categoryStore = () =>{
    return{
        subscribe,
        add:(data)=>{
            update(val=> val ?[...val,data]:[data])
        }
    }
}
 export const category = categoryStore()