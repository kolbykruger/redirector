<template>
  <button class="link link-draggable"
    @click.exact="selection(link)"
    @click.ctrl.exact="$emit('linkData', link)">
     <span>{{ link.pathname }}</span>
 </button>
</template>

<script>
export default {
  name: 'PartialMatchOptionLink',
  props: {
      link: Object,
      selected: Boolean,
  },
  data() {
      return {
          isSelected: false,
      }
  },
  methods: {
      selection(link) {
          this.$emit('selectLink', link);
      }
  },
  created() {
      if (this.selected) {
          this.$emit('optionSelected', this.link);
      }
  }
}
</script>
