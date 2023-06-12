<script>
    export let filters = [];
    export let selected = "";
    export let filterValue = "";
</script>
<form class="d-flex rounded-3 border overflow-hidden">
    <select id="filter" class="form-control border-0 border-end rounded-0" bind:value={filterValue}>
        <option value="">Select Filter..</option>
        {#each filters as filter}
            <option value={filter} selected={filter == selected}>{filter}</option>
        {/each}
    </select>
    
</form>
