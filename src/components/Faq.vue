<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/outline'


const questions = [
  {question:'Is my data safe and secure with Fort Remote Services?', answer:'Yes, we prioritize the security and confidentiality of your data. We use industry-standard encryption methods and have strict data protection protocols in place to ensure your information is secure.'},
  {question:'How do I get started with Fort Remote Services?', answer:'Getting started is easy. Simply reach out to us through our website or contact us directly. We\'ll schedule a consultation to understand your specific needs and create a tailored plan for your business.'},
  {question:'What is the pricing structure for your services?', answer:'Our pricing is competitive and depends on the scope of services you require. We offer flexible pricing options, including hourly rates or monthly packages. Contact us for a customized quote based on your needs.'},
  {question:'Can Fort Remote Services handle both small and large businesses?', answer:'Absolutely. We cater to businesses of all sizes, from startups and SMEs to larger corporations. Our services are scalable to meet your unique requirements.'},
  {question:'What software and tools does Fort Remote Services use for bookkeeping and data entry?', answer:'We use industry-standard accounting software and data entry tools, including QuickBooks, Zoho Books,Freshbooks,Xero, Sage 50cloud, Excel, and specialized software tailored to your industry. Our team is skilled in using these tools efficiently.'},
  {question:'Can you provide references or case studies of past clients you\'ve worked with?', answer:'Yes, we can provide references and case studies upon request. We have a proven track record of delivering high-quality bookkeeping and data entry services to satisfied clients.'},
  {question:'How quickly can Fort Remote Services start working with my business? ', answer:'We understand the importance of timely service. Once we assess your needs and agree on a plan, we can typically begin working on your tasks within a few business days.'},
  {question:'What if I have additional questions or need ongoing support?', answer:'We\'re here to support you. You can contact our customer support team anytime with questions or concerns. We also offer ongoing support options to ensure your satisfaction.'},
]


</script>

<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200" v-for="faq in questions" :key="faq.question" >
          <Disclosure as="div" class="pt-6 transition-all duration-700" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  {{ faq.question }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12 transition-all duration-700">
              <p class="text-base text-gray-500">
                {{ faq.answer }}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>