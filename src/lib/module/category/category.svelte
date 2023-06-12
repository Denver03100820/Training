<script>
    import { Card, CardHeader, CardBody, CardFooter } from "$lib/component/card";
    import List from "$lib/module/category/ui/list.svelte";
    import Filter from "$lib/module/category/forms/filtered.svelte";
    import Add from "$lib/module/category/forms/add.svelte";
    import {category} from "$lib/module/category/store.js"
    // let category = [
    //   { name: "sample", type:"vehicle" },
    //   { name: "sample1", type:"Pet"},
    //   { name: "sample2", type:"Radio"},
    // ];


    let data = JSON.parse(JSON.stringify($category));
    let addItems;

    let filters = $category.map((details)=> {return details.type})
    let filterValue;
    $:{
      if(filterValue)
        data = $category.filter(data => data.type== filterValue)
    }
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
  