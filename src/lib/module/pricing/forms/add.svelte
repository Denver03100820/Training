<script>
    export let addData;

    let myForm;

    const handleSubmit = ()=>{
        let formData = new FormData(myForm);

        addData = Object.fromEntries(formData.entries());
        myForm.reset()
    }
</script>

<form on:submit|preventDefault={handleSubmit} bind:this={myForm}>
    <div class="row">
        <div class="col">
            <input type="text" name="name" class="form-control" placeholder="Items" >
        </div>
        <div class="col">
            <input type="text" name="price" class="form-control" placeholder="Price" >
        </div>
        <div class="col">
            <button type="submit" class="btn btn-success">+</button>
        </div>
    </div>
</form>