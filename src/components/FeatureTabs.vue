<script setup lang="ts">
import {ref} from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import BookKeeping from '@assets/images/book-keeping.png'
import Worker from '@assets/images/office-worker.jpg'

const service_specifics = ref({
  bookkeeping: [
      'Journal Entry and General Ledger Maintenance',
      'Generating &  Recording Sales Invoices',
      'Updating Deposits & Payments in the Cashbook',
      'Expense Tracking: We streamline expense tracking, making it easy to monitor and control costs.',
      'Accounts Receivable Management',
  ],
  customer_care: [
      'Customer Support via Live Chat',
      'Email Support',
      'Social media support',
      'Chatbots and AI-Powered Assistants',
      'Ticketing Systems',
      'Multilingual Support',
      'Escalation Procedures',
  ],
  data_entry: [
      'Data Conversion',
      'Online Data entry',
      'Medical and healthcare data entry',
      'Handwritten data entry',
      'Real Estate Data Entry',
      'Catalogue data entry',
  ],

})

const items = ref([
  {key:'bookkeeping',tab_title:'Bookkeeping Services', title:'Efficient, Accurate, and Convenient Remote Bookkeeping.',
    image: BookKeeping.src ,
  },
  {
    key: 'data_entry',
    tab_title: 'Data Entry Services', title: 'Precision Data Entry, Excellence Every Time',
    image: Worker.src,
  }
])
</script>

<template>
<TabGroup as="div" class="pt-18.5 pb-20 lg:pb-22.5 relative">
        <div class="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div class="absolute top-0 -z-1">
            <img class="dark:hidden" src="/images/shape/shape-dotted-light.svg" alt="Dotted Shape" />
            <img class="hidden dark:block" src="/images/shape/shape-dotted-dark.svg" alt="Dotted Shape" />
          </div>

          <!-- Tab Menues Start -->
          <TabList as="div"
            class="animate_top border border-stroke dark:border-strokedark dark:bg-blacksection shadow-solid-5 dark:shadow-solid-6 bg-white rounded-[10px] flex md:flex-nowrap md:items-center justify-center lg:gap-7.5 xl:gap-12.5 mb-15 xl:mb-21.5"
          >
            <template v-for="(item, index) in items">
                <Tab v-slot="{ selected }" as="template">
                  <div class="outline-none relative cursor-pointer w-full md:w-auto border-b last:border-0 md:border-0 border-stroke dark:border-strokedark flex items-center gap-4 py-2 xl:py-5 px-6 xl:px-13.5"
                  :class="{ 'active before:w-full before:h-1 before:bg-primary before:absolute before:bottom-0 before:left-0 before:rounded-tl-[4px] before:rounded-tr-[4px]': selected }">

                    <div class="w-8 h-8 md:w-12.5 md:h-12.5 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                      <p class="text-black dark:text-white font-medium">{{ index+1 }}</p>
                    </div>
                    <div class="lg:w-auto md:w-3/5">
                      <h5 class="text-black dark:text-white text-sm xl:text-regular font-medium">{{item.tab_title}}</h5>
                    </div>
                  </div>
                </Tab>
            </template>
          </TabList>
          <!-- Tab Menues End -->

          <!-- Tab Content Start -->
          <TabPanels class="animate_top mx-auto max-w-c-1154">
            <template v-for="item in items">
              <TabPanel>
                <div class="flex items-center gap-8 lg:gap-19">
                  <div class="md:w-1/2">
                    <h2 class="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-bold mb-7">{{item.title}}</h2>
                    <div>
                      <ul class="mb-5 list-none">
                        <li class="py-1 flex" v-for="service in service_specifics[item.key]">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary dark:text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {{ service }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="hidden md:block md:w-1/2 h-[359px] w-[539px] bg-red-400 bg-no-repeat bg-cover">
                    <img :src="item.image" alt="Features" class="dark:hidden" />
                  </div>
                </div>
              </TabPanel>
            </template>

          </TabPanels>
          <!-- Tab Content End -->
        </div>
      </TabGroup>
</template>

<style scoped>

</style>