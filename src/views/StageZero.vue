<template lang="html">
  <div>

      <PageHeading title="Domains" summary="We'll need some information on your domains first."/>

      <section class="stage-actions">
          <div class="container grid">

              <div>
                  <label for="">
                      <p><strong>Old website URL</strong></p>
                      <input type="text" name="" value="" v-model="oldUrl" placeholder="https://oldsite.com/">
                      <p class="supporting-label">This is the URL of the website you want to create redirects from.</p>
                  </label>
              </div>

              <div>
                  <label for="">
                      <p><strong>Development website URL</strong></p>
                      <input type="text" name="" value="" v-model="devUrl" placeholder="https://dev.newsite.com/">
                      <p class="supporting-label">This is the URL of the development website.</p>
                  </label>
              </div>

              <div>
                  <label for="">
                      <p><strong>New website URL</strong></p>
                      <input type="text" name="" value="" v-model="newUrl" placeholder="https://newsite.com/">
                      <p class="supporting-label">This is the URL of the website you want to create redirects to.</p>
                  </label>
              </div>

              <div class="stage-error" v-if="stageError">
                  {{ stageError }}
              </div>

          </div>
      </section>

      <section class="stage-navigation buttons">
          <div class="container">
              <div class="group group-center buttons">
                  <button class="button" @click="checkUrls">Next -></button>
              </div>
          </div>
      </section>

      <StageIndicator></StageIndicator>

  </div>
</template>

<script>
import PageHeading from '@/components/PageHeading.vue'
import StageIndicator from '@/components/StageIndicator.vue'

export default {
    name: 'StageZero',
    data() {
        return {
            newUrl: '',
            devUrl: '',
            oldUrl: '',
            stageError: ''
        }
    },
    components: {
        PageHeading,
        StageIndicator,
    },
    created() {
        this.$store.state.stage0 = false;
        this.$store.state.stage1 = false;
        this.$store.state.stage2 = false;
        this.$store.state.stage3 = false;
        this.$store.state.stage4 = false;
        this.$store.state.stage5 = false;
    },
    methods: {
        checkUrls() {
            this.stageError = '';

            if (!this.newUrl || !this.devUrl || !this.oldUrl) {
                this.stageError = 'Please specify valid URLs for all fields.'
                return false
            }

            let newValidator = this.validateURL(this.newUrl);
            let devValidator = this.validateURL(this.devUrl);
            let oldValidator = this.validateURL(this.oldUrl);

            if (!newValidator.status || !devValidator.status || !oldValidator.status) {
                this.stageError = 'Please specify a valid URL.';
                return false
            }

            this.$store.state.newUrl = this.newUrl,
            this.$store.state.devUrl = this.devUrl;
            this.$store.state.oldUrl = this.oldUrl;

            this.$store.state.stage0 = true;
            this.$router.push({ path: '/stage-1' });
        },
        validateURL(url) {
            try {new URL(url);} catch (_) {return {status: false, error: url};}
            return {status: true}
        },
    }
}
</script>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3em;
}

label {

    p {
        margin-bottom: 0.5em;

        &.supporting-label {
            font-size: 0.875rem;
            margin-top: 0.5em;
            opacity: 0.85;
        }
    }
}
</style>
