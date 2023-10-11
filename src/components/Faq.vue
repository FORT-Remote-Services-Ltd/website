<script setup lang="ts">
import {ref} from 'vue'
import {NIcon} from 'naive-ui'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

import { PlusRound } from '@vicons/material'

const questions = ref([
  {quiz:'What services do you offer?', answer:'We specialize in bookkeeping, data entry, and virtual customer care services tailored to your business needs.'},
  {quiz:'How can I trust your team with my sensitive data?', answer:'We prioritize data security, comply with industry standards, and have a track record of handling sensitive information with utmost care.'},
  {quiz:'Can your services be scaled as my business grows?', answer:'Yes, we offer scalable solutions. Whether you need more bookkeeping hours, data entry support, or expanded customer care, we\'ve got you covered.'},
  {quiz:'Is my data safe and secure with Fort Remote Services?', answer:'Yes, we prioritize the security and confidentiality of your data. We use industry-standard encryption methods and have strict data protection protocols in place to ensure your information is secure.'},
  {quiz:'How do I get started with Fort Remote Services?', answer:'Getting started is easy. Simply reach out to us through our website or contact us directly. We\'ll schedule a consultation to understand your specific needs and create a tailored plan for your business.'},
  {quiz:'What is the pricing structure for your services?', answer:' Our pricing is competitive and depends on the scope of services you require. We offer flexible pricing options, including hourly rates or monthly packages. Contact us for a customized quote based on your needs.'},
  {quiz:' What software and tools does Fort Remote Services use for bookkeeping and data entry?', answer:'We use industry-standard accounting software and data entry tools, including QuickBooks, Zoho Books,Freshbooks,Xero, Sage 50cloud, Excel, and specialized software tailored to your industry. Our team is skilled in using these tools efficiently.'},
  {quiz:'Can you provide references or case studies of past clients you\'ve worked with?', answer:'Yes, we can provide references and case studies upon request. We have a proven track record of delivering high-quality bookkeeping and data entry services to satisfied clients.'},
  {quiz:'How quickly can Fort Remote Services start working with my business? ', answer:'We understand the importance of timely service. Once we assess your needs and agree on a plan, we can typically begin working on your tasks within a few business days.'},
  {quiz:'What if I have additional questions or need ongoing support?', answer:'We\'re here to support you. You can contact our customer support team anytime with questions or concerns. We also offer ongoing support options to ensure your satisfaction.'},
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