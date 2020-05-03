<template>
    <div class="redirect-listing">
        <div class="redirect-from-group">
            <p v-for="(item, index) in redirect.fromRedirect" :key="index">
                {{ item.pathname }}
            </p>
        </div>
        <div class="redirect-to">
            <p>{{ redirect.toRedirect.pathname }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'RedirectListing',
  props: ['redirect']
}
</script>
