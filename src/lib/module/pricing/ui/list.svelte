<script>
    import Ul from "$lib/component/list/ul.svelte";
    import Li from "$lib/component/list/li.svelte";
    export let data ,selectedItem;

    const handleClick = (price) =>(selectedItem = price)

</script>

<Ul>
    {#each data as data}
      <Li>
        <div class="d-flex align-items-center justify-content-between">
            <button type="button" class="list-group-item list-group-item-action" on:click={()=>handleClick(data.price)}>
                {data.name}- {data.price}
            </button>
        </div>
      </Li>
    {/each}
  </Ul>