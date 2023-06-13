<script>
  import { Card, CardHeader, CardBody, CardFooter } from "$lib/component/card";
  import Form from "$lib/module/items/form/form.svelte";
  import List from "$lib/module/items/ui/list.svelte";
  import ItemList from "$lib/module/items/ui/item_list.svelte";
  import UiDiv from "$lib/component/ui/div.svelte";

  import {listItems,order} from "$lib/module/items/storeLocalItemList.js";

  let itemTotal = 0;
  // let itemList = [
  //   { name: "sample", price: 250, qty: 300 },
  //   { name: "sample1", price: 25, qty: 300 },
  //   { name: "sample2", price: 50, qty: 300 },
  // ];

  console.log($listItems)

  let data = $listItems.map((data,index) => {data.index = index; return data});
  let dataOrder = $order.map((data,index) => {data.index = index; return data});


  let itemOrder = [];
  let orderItem;
  let addItemList;
  let delIndex;
  let action;

  $: itemTotal = dataOrder.reduce(
    (total, curr) => (total = total + curr.price * curr.qty),
    0
  );
  
  $:{
      if(addItemList)
      {
        if(Boolean(addItemList.name) && Boolean(addItemList.price))
        {
          listItems.add(addItemList)
          data  = $listItems.map((data,index) => {data.index = index; return data});
        }
        addItemList = null;
      }

      if(orderItem)
      {
        if($order.length)
        {
          let isExist = $order.filter(data => data.name     == orderItem.name)
          if(isExist.length)
          {
            orderItem.qty += isExist[0].qty;
            order.update(orderItem,isExist[0].index)
          }
          else
            order.add(orderItem)
        }
        else
          order.add(orderItem)
       
        dataOrder = $order.map((data,index) => {data.index = index; return data});
        orderItem = null;
      }

      if(action != null){
        let newQty = $order[delIndex];
        console.log(newQty)
        if(action == "minus")  
          newQty.qty -= 1;
        else
          newQty.qty += 1;
        
        if(newQty.qty == 0)
          order.delete(delIndex)
        else
          order.update(newQty,delIndex)
        console.log($order)
        dataOrder = $order.map((data,index) => {data.index = index; return data});
        action = null;
      }
    }

</script>

<UiDiv props={{att:{class:"d-flex justify-content-between align-items-stretch position-absolute top-50 start-50 translate-middle w-50 " ,style:"min-height:500px;min-width:400px"}}}>
  <UiDiv props={{att:{class:"border border-top-2 border-bottom-2 border-start-2 rounded-0 w-100 m-0" ,style:""}}}>
    <Card>
      <CardHeader>Select Items</CardHeader>
      <CardBody>
        <ItemList list={data} bind:orderItem></ItemList>
      </CardBody>
      <CardFooter>
        <UiDiv props={{att:{class:"p-2 w-100 ",style:"max-height:60px"}}}>
          <Form bind:addItemList/>
        </UiDiv>
      </CardFooter>
    </Card>
  </UiDiv>
  <UiDiv props={{att:{class:"d-flex align-items-stretch shrink-0" ,style:""}}}>
    <Card>
      <CardHeader>Summary</CardHeader>
      <CardBody>
        <UiDiv props={{att:{class:"d-flex  overflow-auto"}}}>
          <UiDiv props={{att:{class:"flex-grow-0 w-100",style:"max-height: 400px;"}}}>
            <List items={dataOrder} bind:delIndex={delIndex} bind:action = {action}/>
          </UiDiv>
        </UiDiv>
      </CardBody>
      <CardFooter>
        <UiDiv props={{att:{class:"h5",style:""}}}>
          Total Price
        </UiDiv>
        <UiDiv props={{att:{class:"border border-2 border-white p-2 h3",style:""}}}>
          {itemTotal.toLocaleString()}
        </UiDiv>
      </CardFooter>
    </Card>
  </UiDiv>
</UiDiv>
