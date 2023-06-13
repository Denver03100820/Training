<script>
    export let addItemList;

    let myForm;

    const handleSubmit = ()=>{
        let formData = new FormData(myForm);

        addItemList = Object.fromEntries(formData.entries());
        myForm.reset()
    }
</script>

<form on:submit|preventDefault={handleSubmit} bind:this={myForm}>
    <div class="row">
        <div class="col">
            <input type="text" name="name" class="form-control rounded-0" placeholder="Items" >
        </div>
        <div class="col">
            <input type="number" name="price" class="form-control rounded-0" placeholder="Price" >
        </div>
        <div class="col">
            <button type="submit" class="btn btn-outline-success text-white btn-md d-flex flex-nowrap">ADD ITEMS</button>
        </div>
    </div>
</form>