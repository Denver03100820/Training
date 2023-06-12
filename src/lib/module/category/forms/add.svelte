<script>
    import {onMount} from "svelte"

    export let addItems;

    let myForm;

    const handleSubmit = ()=>{
        let formData = new FormData(myForm);

        addItems = Object.fromEntries(formData.entries());
        myForm.reset()
    }
</script>

<form on:submit|preventDefault={handleSubmit} bind:this={myForm}>
    <div class="row">
        <div class="col">
            <input type="text" name="name" class="form-control" placeholder="Items" >
        </div>
        <div class="col">
            <input type="text" name="type" class="form-control" placeholder="Category" >
        </div>
        <div class="col">
            <button type="submit" class="btn btn-success">+</button>
        </div>
    </div>
</form>