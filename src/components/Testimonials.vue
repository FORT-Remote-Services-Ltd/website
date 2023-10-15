<script setup lang="ts">
import {ref} from 'vue'
import {NCarousel, NIcon} from 'naive-ui'
import {ArrowBackRound, ArrowForwardRound} from '@vicons/material'

const testimonials = ref([
  {client:'Maria .A, CEO', description:'Telecommunication Industry', content:'Thanks to Fort Remote managing our finances remotely has never been easier. Their dedicated team of experts ensures our financial records are always up-to-date, allowing us to make informed decisions and focus on our core business. Their professionalism, responsiveness, and attention to detail have been instrumental in our success. We highly recommend Fort Remote for their exceptional remote bookkeeping services.', image:'/images/user/user-01.svg'},
  {client:'Z . Mahanyele, MD', description:'Hospitality Industry', content:'Thanks to Fort Remote, our financials are in great hands. Their remote bookkeeping services have been a vital asset to our business. With their expertise, we\'ve achieved financial clarity and efficiency like never before. I highly recommend Fort Remote to anyone seeking top-notch remote bookkeeping services for their website.', image:'/images/user/user-01.svg'},
  {client:'MT Pangilinan., COO', description:'Health Industry', content:'Choosing Fort Remote for our remote data entry needs was a smart decision. Their team\'s precision and dedication have improved our data accuracy and saved us valuable time. We\'re grateful for their seamless support. If you\'re seeking efficient remote data entry services, look no further than Fort Remote.', image:'/images/user/user-01.svg'},
  {client:'Dr. David D.,Executive Head', description:'Education Industry', content:'Kudos to Fort Remote for their dedication to data security. As a Learning institution, we needed a partner we could trust with sensitive information. Their remote data entry, and virtual customer care services have exceeded our expectations in every way. We couldn\'t have asked for a better partner.', image:'/images/user/user-01.svg'},
  {client:'Patricia M., Managing Director', description:'FMCG', content:'We were drowning in paperwork until we found Fort Remote. Their data entry services have revolutionized our data management processes. And their virtual customer care team? Exceptional! Our clients notice the difference in our support quality. Thank you, Fort Remote!', image:'/images/user/user-01.svg'},
  {client:'Dipak S.', description:'Engineering Industry', content:'Fort Remote has transformed our customer care operations. Their virtual customer care services have provided our customers with exceptional support around the clock. Their team\'s professionalism and dedication to our brand have been outstanding. We highly recommend Fort Remote for top-tier virtual customer care services.', image:'/images/user/user-01.svg'}
])
</script>

<template>
  <n-carousel show-arrow :slides-per-view="1" :space-between="20" loop draggable>
    <template v-for="item in testimonials">
      <div class="shadow-lg border border-stroke dark:border-strokedark rounded">
          <div class="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
            <div class="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
              <div>
                <h4 class="text-black dark:text-white text-metatitle3 mb-1.5">{{ item.client }}</h4>
                <p>{{ item.description }}</p>
              </div>
              <img class="" :src="item.image" alt="User" />
            </div>

            <p>"{{ item.content }}"</p>
          </div>
        </div>
    </template>

    <template #arrow="{ prev, next }">
      <div class="custom-arrow mt-20">
        <button type="button" class="custom-arrow--left !bg-primary" @click="prev">
          <n-icon><ArrowBackRound /></n-icon>
        </button>
        <button type="button" class="custom-arrow--right !bg-primary" @click="next">
          <n-icon><ArrowForwardRound /></n-icon>
        </button>
      </div>
    </template>
    <template #dots="{ total, currentIndex, to }">
      <ul class="custom-dots mt-20">
        <li
          v-for="index of total"
          :key="index"
          :class="[ currentIndex === index - 1 ? 'is-active' : '', '!bg-primary/50' ]"
          @click="to(index - 1)"
        />
      </ul>
    </template>
  </n-carousel>
</template>

<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}
</style>
