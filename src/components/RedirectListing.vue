<template>
    <div class="redirect-listing">
        <div class="redirect-from-group">
            <p v-for="(item, index) in redirect.fromRedirect" :key="index">
                {{ item.url }}
            </p>
        </div>
        <div class="redirect-arrow">
            <p>-></p>
        </div>
        <div class="redirect-to">
            <p>{{ redirect.toRedirect.url }}</p>
        </div>
        <!-- <button title="Remove" type="button" name="button">X</button> -->
    </div>
</template>

<script>
export default {
  name: 'RedirectListing',
  props: ['redirect']
}
</script>
