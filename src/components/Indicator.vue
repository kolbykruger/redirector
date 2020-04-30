<template lang="html">
    <div class="indicator" :class="{'indicator-true': indicatorData.status}">
        <div class="circle">
            <div class="icon" v-if="indicatorData.status">
                ✔
            </div>
            <div class="icon" v-else>
                ✖
            </div>
        </div>
        <span class="indicator-tooltip">{{ indicatorData.stage }}</span>
    </div>
</template>

<script>
export default {
    name: 'Indicator',
    props: ['indicatorData']
}
</script>
