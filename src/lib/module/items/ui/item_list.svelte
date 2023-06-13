<script>
    import UiDiv from "$lib/component/ui/div.svelte";
    import Button from "$lib/component/button/button.svelte";
    export let list = [],orderItem;

    const handleOrder = ({name,price}) =>{
      orderItem = {name,price,qty:1};
      console.log(1);
    }
  </script>
  
  <UiDiv props={{att:{class:"d-flex flex-wrap justify-content-between overflow-auto" ,style:""}}}>
    <div class="flex-grow-0" style="max-height: 400px;">
      {#each list as item}
        <Button props={{attribute:{class:"btn btn-outline-info text-uppercase text-dark  h6 rounded-0 m-2"},action:()=>(handleOrder(item))}} >{item.name} - {item.price}</Button>
      {/each}
    </div>
  </UiDiv>
  