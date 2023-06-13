<script>
  import CardHeader from "$lib/component/card/header.svelte";
  import CardBody from "$lib/component/card/body.svelte";
  import { CardFooter } from ".";

  export let props = {
    att:{class:"card  rounded-0 h-100",style:"min-width:300px"}
  }

</script>

<div {...props.att}>
  <slot>
    <CardHeader>
      <h2 class="h4">Card Header</h2>
    </CardHeader>
    <CardBody>
      <p>Card Body</p>
    </CardBody>
    <CardFooter />
  </slot>
</div>
