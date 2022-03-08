<template>
  <div>
    <Header />
    <Nuxt keep-alive :keep-alive-props="{ max: 10 }" />
    <!-- <Nuxt /> -->
  </div>
</template>

<script>
import Vue from 'vue'
import global from '~/mixins/global.js'

Vue.mixin(global)
export default {}
</script>
