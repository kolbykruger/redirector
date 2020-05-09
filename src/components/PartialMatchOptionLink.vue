<template>
  <button class="link link-draggable"
    @click.exact="selection(link)"
    @click.ctrl.exact="$emit('linkData', link)">
     <span v-html="highlightSimilarities"></span>
 </button>
</template>

<script>
export default {
  name: 'PartialMatchOptionLink',
  props: {
      link: Object,
      selected: Boolean,
      similarities: Array
  },
  data() {
      return {
          isSelected: false,
      }
  },
  computed: {
      highlightSimilarities() {

          let pathName = this.link.pathname,
              similarities = this.similarities;

            similarities.forEach((word) => {
                console.log(word)
                pathName = pathName.replace(word, `<span>${word}</span>`)
            })

            return pathName;

      },
  },
  methods: {
      selection(link) {
          this.$emit('selectLink', link);
      },
  },
  created() {
      if (this.selected) {
          this.$emit('optionSelected', this.link);
      }
  }
}
</script>
