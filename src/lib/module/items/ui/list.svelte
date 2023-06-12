<script>
  import Ul from "$lib/component/list/ul.svelte";
  import Li from "$lib/component/list/li.svelte";
  import Button from "$lib/component/button/button.svelte";
  export let items = [];
</script>

<Ul>
  {#each items as item}
    <Li>
      <div class="d-flex align-items-center justify-content-between">
        <span>
          {item.name}: {item.price} x {item.qty}
        </span>
        <span class="d-flex align-items-center justify-content-between">
          <Button
            props={{
              attribute: { class: "btn bg-transparent text-danger fs-4 p-1" },
              action: () => (item.qty -= 1),
            }}
          >
            {"-"}
          </Button>
          <span class="border p-2">
            {item.qty}
          </span>
          <Button
            props={{
              attribute: { class: "btn bg-transparent text-success fs-4 p-1" },
              action: () => (item.qty += 1),
            }}>{"+"}</Button
          >
        </span>
      </div>
    </Li>
  {/each}
</Ul>
