<script setup lang="ts">
import {ref} from 'vue'
import {NIcon} from 'naive-ui'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

import { PlusRound } from '@vicons/material'

const questions = ref([
  {question:'What services do you offer?', answer:'We specialize in bookkeeping, data entry, and virtual customer care services tailored to your business needs.'},
  {question:'How can I trust your team with my sensitive data?', answer:'We prioritize data security, comply with industry standards, and have a track record of handling sensitive information with utmost care.'},
  {question:'Can your services be scaled as my business grows?', answer:'Yes, we offer scalable solutions. Whether you need more bookkeeping hours, data entry support, or expanded customer care, we\'ve got you covered.'},
  {question:'Is my data safe and secure with Fort Remote Services?', answer:'Yes, we prioritize the security and confidentiality of your data. We use industry-standard encryption methods and have strict data protection protocols in place to ensure your information is secure.'},
  {question:'How do I get started with Fort Remote Services?', answer:'Getting started is easy. Simply reach out to us through our website or contact us directly. We\'ll schedule a consultation to understand your specific needs and create a tailored plan for your business.'},
  {question:'What is the pricing structure for your services?', answer:' Our pricing is competitive and depends on the scope of services you require. We offer flexible pricing options, including hourly rates or monthly packages. Contact us for a customized quote based on your needs.'},
  {question:' What software and tools does Fort Remote Services use for bookkeeping and data entry?', answer:'We use industry-standard accounting software and data entry tools, including QuickBooks, Zoho Books,Freshbooks,Xero, Sage 50cloud, Excel, and specialized software tailored to your industry. Our team is skilled in using these tools efficiently.'},
  {question:'Can you provide references or case studies of past clients you\'ve worked with?', answer:'Yes, we can provide references and case studies upon request. We have a proven track record of delivering high-quality bookkeeping and data entry services to satisfied clients.'},
  {question:'How quickly can Fort Remote Services start working with my business? ', answer:'We understand the importance of timely service. Once we assess your needs and agree on a plan, we can typically begin working on your tasks within a few business days.'},
  {question:'What if I have additional questions or need ongoing support?', answer:'We\'re here to support you. You can contact our customer support team anytime with questions or concerns. We also offer ongoing support options to ensure your satisfaction.'},
])


</script>

<template>
<div class="bg-gray-900">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="lg:max-w-2xl lg:mx-auto lg:text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Frequently asked questions</h2>
        <p class="mt-4 text-gray-400"></p>
      </div>
      <div class="mt-20">
        <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
          <div v-for="faq in questions" :key="faq">
            <dt class="font-semibold text-white">
              {{ faq.question }}
            </dt>
            <dd class="mt-3 text-gray-400">
              {{ faq.answer }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>