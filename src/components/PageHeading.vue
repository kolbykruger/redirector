<template>
  <section class="pageheading">
    <div class="container">
        <h1>{{ title }}</h1>
        <p>
          {{ summary }}
        </p>
    </div>
</section>
</template>

<script>
export default {
  name: 'PageHeading',
  props: {
    title: String,
    summary: String
  }
}
</script>
