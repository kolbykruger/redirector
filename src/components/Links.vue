<template>
  <button class="link link-draggable"
    @click.exact="$emit('childToParent', links)"
    @click.ctrl.exact="$emit('linkData', links)"
    >
     <span>{{ links.pathname }}</span>
 </button>
</template>

<script>
export default {
  name: 'Links',
  props: ['links']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
