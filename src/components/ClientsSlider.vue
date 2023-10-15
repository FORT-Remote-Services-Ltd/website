<script setup lang="ts">
import { VueMarqueeSlider } from 'vue3-marquee-slider';
import '../../node_modules/vue3-marquee-slider/dist/style.css'

let base = '/images/toolstack/', image_names = ['clearbooks', 'freeagent', 'kashoo', 'myob', 'odoo', 'patriot','qb', 'qbo','sage50','trullysmall','wave','xero','zoho']

const images = image_names.map(name => {
  return {path:`${base}${name}.svg`, alt:name}
})

</script>

<template>
      <ul class="flex items-center justify-center md:justify-start">
        <vue-marquee-slider
          id="marquee-slider"
          :speed="50000"
          :width="100"
        >
        <li class="animate_top flex items-center" v-for="item in images">
          <img class="h-36 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 dark:hidden" :src="item.path" :alt="item.alt" />
        </li>
        </vue-marquee-slider>

      </ul>
</template>

<style scoped>

</style>