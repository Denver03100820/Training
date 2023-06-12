<script>
    import { Card, CardHeader, CardBody, CardFooter } from "$lib/component/card";
    import List from "$lib/module/category/ui/list.svelte";
    import Filter from "$lib/module/category/forms/filtered.svelte";
    import Add from "$lib/module/category/forms/add.svelte";
    import {category} from "$lib/module/category/store.js"

    let data = JSON.parse(JSON.stringify($category));
    let addItems;

    let filters = $category.map((details)=> {return details.type})
    let filterValue;

    //filtering of data
    $:{
      if(filterValue)
        data = $category.filter(data => data.type== filterValue)
    }
    
    //adding items in store
    $:{
      if(addItems)
      {
        category.add(addItems)
        data     = JSON.parse(JSON.stringify($category));
        filters  = $category.map((details)=> {return details.type})
        addItems = null;
      }
    }
    
  </script>
  
  <Card>
    <CardHeader>
      <Filter bind:filters bind:filterValue />
    </CardHeader>
    <CardBody>
      <List bind:category={data} />
    </CardBody>
    <CardFooter><Add bind:addItems/></CardFooter>
  </Card>
  