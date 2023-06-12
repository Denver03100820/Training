<script>
  import ModalHeader from "./head.svelte";
  import ModalBody from "./body.svelte";
  import ModalFooter from "./footer.svelte";

  export let myModal;
</script>

<div class="modal" bind:this={myModal} tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <slot>
        <ModalHeader />
        <ModalBody />
        <ModalFooter />
      </slot>
    </div>
  </div>
</div>
