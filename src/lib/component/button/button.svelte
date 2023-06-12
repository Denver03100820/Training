<script>
  export let props = { attribute: {}, action: () => {} };
</script>

<button {...props.attribute} on:click={props.action}>
  <slot />
</button>
