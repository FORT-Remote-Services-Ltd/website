<script setup lang="ts">
import {ref} from 'vue'
import {NIcon} from 'naive-ui'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

import { PlusRound } from '@vicons/material'

const questions = ref([
  {quiz:'What services do you offer?', answer:'We specialize in bookkeeping, data entry, and virtual customer care services tailored to your business needs.'},
  {quiz:'How can I trust your team with my sensitive data?', answer:'We prioritize data security, comply with industry standards, and have a track record of handling sensitive information with utmost care.'},
  {quiz:'Can your services be scaled as my business grows?', answer:'Yes, we offer scalable solutions. Whether you need more bookkeeping hours, data entry support, or expanded customer care, we\'ve got you covered.'},
])


</script>

<template>
  <div class="animate_right md:w-3/5 lg:w-1/2">
    <Disclosure v-slot="{ open }" v-for="question in questions">
      <div class="bg-white dark:bg-blacksection dark:border dark:border-strokedark shadow-solid-8 rounded-lg">
        <div class="flex flex-col border-b border-stroke dark:border-strokedark">
           <DisclosureButton>
            <h4
              class="cursor-pointer flex justify-between items-center font-medium text-metatitle3 text-black dark:text-white py-5 lg:py-7.5 px-6 lg:px-9"
            >
              {{ question.quiz }}
               <n-icon size="32" :class="[
                   open ? 'rotate-45' : ''
               ]" :component="PlusRound" />
            </h4>
          </DisclosureButton>
          <DisclosurePanel class="py-5 lg:py-7.5 px-6 lg:px-9 border-t border-stroke dark:border-strokedark">
              {{ question.answer }}
          </DisclosurePanel>
        </div>
      </div>
      </Disclosure>
    </div>
</template>

<style scoped>

</style>