<template>
  <div class="partial-match-link" v-if="!confirmed">
      <div class="compare">
          <p class="compare-old">
              <a target="_blank" :href="$store.state.oldUrl.replace(/\/$/, '') + redirectData.old.pathname">
                <span>{{ redirectData.old.pathname }}</span>
              </a>
          </p>
          <div class="compare-new" :class="{'compare-error': stageError}">
              <div v-if="redirectData.new.length > 1">
                  <p v-for="(item, index) in redirectData.new" :key="index">
                      <PartialMatchOptionLink
                          :link="item.link"
                          :selected="false"
                          :similarities="item.similarities"
                          @optionSelected="partialOptionSelected"
                          @selectLink="partialOptionAction"
                          :class="{'link-selected': isSelected(item.link)}"
                          :data-rank="item.rank"
                          :data-tooltip="redirectData.new[0].rank + ' similarities'">
                      </PartialMatchOptionLink>
                  </p>
              </div>
              <div v-else>
                <PartialMatchOptionLink
                    :link="redirectData.new[0].link"
                    :selected="true"
                    :similarities="redirectData.new[0].similarities"
                    @optionSelected="partialOptionSelected"
                    :class="{'link-selected': isSelected(redirectData.new[0].link)}"
                    :data-rank="redirectData.new[0].rank"
                    :data-tooltip="redirectData.new[0].rank + ' similarities'">
                </PartialMatchOptionLink>
              </div>
          </div>
      </div>
      <div class="tray buttons">
          <button class="button button-green button-small"
            @click="confirm"
            >
             + Create
          </button>
          <button class="button button-small button-secondary"
            @click="ignore"
            >
             Hide
          </button>
      </div>
  </div>
</template>

<script>
import PartialMatchOptionLink from '@/components/PartialMatchOptionLink.vue';

export default {
  name: 'PartialMatchLink',
  components: {
      PartialMatchOptionLink
  },
  props: ['redirectData'],
  data() {
      return {
          confirmed: false,
          oldRedirect: null,
          newRedirect: null,
          selectedOption: null,
          stageError: false,
      }
  },
  created() {
      this.oldRedirect = this.redirectData.old;
  },
  computed: {

  },
  methods: {
      confirm() {
          this.stageError = false;

          if (this.newRedirect) {
              this.confirmed = true;

              let oldLink = this.oldRedirect,
                  newLink = this.newRedirect;

              let obj = {
                  oldLink,
                  newLink,
              }

              this.$emit('childToParent', obj);

          } else {
              this.stageError = true;
          }

      },
      ignore() {
          this.confirmed = true
      },
      partialOptionSelected(value) {
          this.selectedOption = value
          this.newRedirect = value
      },
      partialOptionAction(value) {
          this.selectedOption = value
          this.newRedirect = value
      },
      isSelected(item) {
          if (this.selectedOption) {
              if (this.selectedOption.pathname == item.pathname) {
                  return true
              } else {
                  return false
              }
          } else {
              return false
          }
      },
  }
}
</script>
