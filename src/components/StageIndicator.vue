<template lang="html">
    <section class="stage-indicator">
        <div class="container">
            <div class="group">
                <div v-for="(stage, index) in stageData" :key="index" :class="{'indicator-true': stage.status}">
                    <Indicator :indicatorData="stage"></Indicator>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Indicator from '@/components/Indicator.vue';

export default {
    name: "StageIndicator",
    components: {
        Indicator
    },
    data() {
        return {
            stageData: [],
        }
    },
    created() {
        let stageZero = {
            status: this.$store.state.stage0,
            stage: 'Domains'
        },
            stageOne = {
                status: this.$store.state.stage1,
                stage: 'Old website'
            },
            stageTwo = {
                status: this.$store.state.stage2,
                stage: 'New website'
            },
            stageThree = {
                status: this.$store.state.stage3,
                stage: 'Auto-matching'
            },
            stageFour = {
                status: this.$store.state.stage4,
                stage: 'Manual matching'
            },
            stageFive = {
                status: this.$store.state.stage5,
                stage: 'The redirects'
            };

            this.stageData.push(stageZero)
            this.stageData.push(stageOne)
            this.stageData.push(stageTwo)
            this.stageData.push(stageThree)
            this.stageData.push(stageFour)
            this.stageData.push(stageFive)
    }
}
</script>
