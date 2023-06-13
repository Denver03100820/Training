// @ts-nocheck
import { getStores } from "$app/stores";
import { writable } from "svelte/store";
import {get} from 'svelte/store'

const storeNameList = "list";
const storeNameOrder = "order";

const orderList = writable([]);
const store = writable([]);
const {subscribe,set,update} = store
const{subscribe:subOrder,set:setOrder,update:updateOrder} = orderList;

let isBrowser = typeof window !== 'undefined';

const saveLocal = (name,data)=>{
    if(!isBrowser) return false; 

    localStorage.setItem(name,JSON.stringify(data));
    name == 'list' ? set(data):setOrder(data);
}

// const localList = localStorage.getItem(storeNameList);
// const localOrder = window.localStorage.getItem(storeNameOrder);


const listItemStore = () =>{
    isBrowser && localStorage.getItem("list") && set(JSON.parse(localStorage.getItem("list")));
    console.log(typeof localStorage)
    return{
        subscribe,
        add:(data)=>{
            let value = get(store);
            const val = [...value,data];
            saveLocal(storeNameList,val);
        }
    }
}


const orderListStore =()=>{
    // isBrowser && localOrder && setOrder(JSON.parse(localOrder));
    isBrowser && localStorage.getItem("order") && setOrder(JSON.parse(localStorage.getItem("order")));

    return{
        subscribe:subOrder,
        add:(data)=>{
            let value = get(orderList)
            const val = [...value,data];
            saveLocal(storeNameOrder,val)
        },
        update:(data,idx)=>{
            let value = get(orderList)
            const val = value.map((value,index) =>{
                if(idx != index) return value;
                else return data;
            })
            saveLocal(storeNameOrder,val)
        },
        delete:(idx)=>{
            let value = get(orderList)
            const val= value.filter((value,index)=>{ if(index != idx) return value})
            saveLocal(storeNameOrder,val)
            
        }
    }
}
export const listItems = listItemStore();
export const order = orderListStore();