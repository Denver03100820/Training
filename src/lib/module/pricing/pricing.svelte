<script>
    import { Card, CardHeader, CardBody, CardFooter } from "$lib/component/card";
    import List from "$lib/module/pricing/ui/list.svelte";
    import Filter from "$lib/module/pricing/forms/filtered.svelte";
    import Add from "$lib/module/pricing/forms/add.svelte";
    import {pricing} from "$lib/module/pricing/store.js";

    pricing.add({name:"item1",price:120});
    pricing.add({name:"item1",price:121});
    pricing.add({name:"item1",price:122});
    pricing.add({name:"item1",price:123});

    let data = JSON.parse(JSON.stringify($pricing));

    let selectedItem = "";
    let addData ;

    $:{
      if(addData)
      {
        pricing.add(addData)
        data     = JSON.parse(JSON.stringify($pricing));
        addData = null;
      }
    }
</script>

<Card>
    <CardHeader>
        {selectedItem}
    </CardHeader>
    <CardBody>
        <List bind:data bind:selectedItem/>
    </CardBody>
    <CardFooter>
        <Add bind:addData></Add>
    </CardFooter>
</Card>