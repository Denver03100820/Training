// @ts-nocheck
import { writable } from "svelte/store";
const orderList = writable([]);
const {subscribe,set,update} = writable([])

const{subscribe:subOrder,set:setOrder,update:updateOrder} = orderList;


const listItemStore = () =>{
    return{
        subscribe,
        add:(data)=>{
            update(val=> val ?[...val,data]:[data])
        }
    }
}

const orderListStore =()=>{
    return{
        subscribe:subOrder,
        add:(data)=>{
            updateOrder(val=> val ?[...val,data]:[data])
        },
        update:(data,idx)=>{
            updateOrder(val=> val.map((value,index) =>{
                if(idx != index) return value;
                else return data;
            }))
        },
        delete:(idx)=>{
            updateOrder(val=> val.filter((value,index)=>{ if(index != idx) return value}))
        }
    }
}
export const listItems = listItemStore();
export const order = orderListStore();