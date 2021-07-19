<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Vue from 'vue'
import global from '~/mixins/global.js'

Vue.mixin(global)
export default {}
</script>
