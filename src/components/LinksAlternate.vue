<template>
  <div class="link">
     <span>{{ links.url }}</span>
     <input type="text" name="" value="">
  </div>
</template>

<script>
export default {
  name: 'LinksAlternate',
  props: ['links'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.link {
    display: flex;
    align-items: center;
    span,
    input {
        flex: 1;
    }
}
</style>
