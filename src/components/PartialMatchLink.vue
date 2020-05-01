<template>
  <div class="partial-match-link" :class="{'partial-match-link-confirmed': confirmed}">
      <div class="compare">
          <p class="compare-old">
              {{ redirectData.old.pathname }}
          </p>
          <div class="compare-new">
              <div v-for="(item, index) in redirectData.new" :key="index">
                  <Links :links="item"></Links>
              </div>
          </div>
      </div>
      <div class="tray buttons">
          <button class="button"
          @click.exact="ignore"
          v-if="confirmed">
              Remove
          </button>
          <button class="button button-green"
            @click.exact="confirm"
            @click.ctrl.exact="$emit('linkData', links)"
            v-if="!confirmed">
             + Add
          </button>
      </div>
  </div>
</template>

<script>
import Links from '@/components/Links.vue';

export default {
  name: 'PartialMatchLink',
  components: {
      Links
  },
  props: ['redirectData'],
  data() {
      return {
          confirmed: false,
      }
  },
  created() {

  },
  methods: {
      confirm() {
          this.confirmed = true;
          //this.partials.push()
      },
      ignore() {
          this.confirmed = false
      },
  }
}
</script>
