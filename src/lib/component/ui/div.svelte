<script>
    export let props = {
        att:{class:"",style:""}
    }

</script>
<div {...props.att}>
    <slot />
</div>