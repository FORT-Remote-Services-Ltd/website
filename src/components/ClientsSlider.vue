<script setup lang="ts">
import { VueMarqueeSlider } from 'vue3-marquee-slider';
import '../../node_modules/vue3-marquee-slider/dist/style.css'

const images = [
    '/images/intuit-logo.svg',
    '/images/zoho.svg',
    '/images/oracle-logo%201.svg',
    '/images/quickbooks.svg',
    '/images/sage.svg',
    '/images/mysql-logo%201.svg',
]
</script>

<template>
      <ul class="flex items-center justify-center md:justify-start">
        <vue-marquee-slider
          id="marquee-slider"
          :speed="20000"
          :width="100"
        >
        <li class="animate_top block" v-for="item in images">
          <img class="h-20 w-20 transition-all duration-300 hover:scale-110 dark:hidden" :src="item" alt="FORT Client" />
        </li>
        </vue-marquee-slider>

      </ul>
</template>

<style scoped>

</style>