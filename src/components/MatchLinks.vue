<template>
  <div class="link link-match" :tooltip="links.url">
     <p>{{ links.protocol }}//{{ links.hostname }}/<strong>{{ links.pathname.substring(1) }}</strong> </p>
  </div>
</template>

<script>
export default {
  name: 'MatchLinks',
  props: ['links']
}
</script>
