<script>
    import Ul from "$lib/component/list/ul.svelte";
    import Li from "$lib/component/list/li.svelte";
    import Button from "$lib/component/button/button.svelte";
    export let category = [];
  </script>
  
  <Ul>
    {#each category as category}
      <Li>
        <div class="d-flex align-items-center justify-content-between">
          <span>
            {category.name}- {category.type}
          </span>
        </div>
      </Li>
    {/each}
  </Ul>
  