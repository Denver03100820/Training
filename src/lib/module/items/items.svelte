<script>
  import { Card, CardHeader, CardBody, CardFooter } from "$lib/component/card";
  import List from "$lib/module/items/ui/list.svelte";
  let itemTotal = 0;
  let itemList = [
    { name: "sample", price: 250, qty: 300 },
    { name: "sample1", price: 25, qty: 300 },
    { name: "sample2", price: 50, qty: 300 },
  ];

  $: itemTotal = itemList.reduce(
    (total, curr) => (total = total + curr.price * curr.qty),
    0
  );
</script>

<Card>
  <CardHeader>Total Price:{itemTotal}</CardHeader>
  <CardBody>
    <List bind:items={itemList} />
  </CardBody>
  <CardFooter>ITEMS ADD</CardFooter>
</Card>
