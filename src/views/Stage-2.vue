<template>
  <div class="start">
    <h1>Stage 2</h1>
    <p>Provide the new links</p>
    <button type="button" name="button">Upload XML File</button>
    <button type="button" name="button">Paste RAW Links</button>
    <button type="button" name="button">Skip</button>

    <div class="stage-nagivation">
        <router-link to="/stage-1">Previous</router-link> |
        <router-link to="/stage-3">Next -></router-link> |
        <router-link to="/stage-4">Skip</router-link>
    </div>
  </div>
</template>
