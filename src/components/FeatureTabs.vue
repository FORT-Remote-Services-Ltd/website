<script setup lang="ts">
import {ref} from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import BookKeeping from '@assets/images/book-keeping.png'
import Worker from '@assets/images/office-worker.jpg'

const service_specifics = ref({
  bookkeeping: [
    {name:'Online Accounting Software Setup and Management', description:'Setting up and managing cloud-based accounting software for clients. This allows for real-time collaboration and access to financial data from anywhere.'},
    {name:'Data Entry and Transaction Recording', description:'Accurate and timely entry of financial transactions, including income, expenses, invoices, and receipts, into accounting software.'},
    {name:'Bank Reconciliation', description:'Remote bookkeepers reconcile bank and credit card statements with the accounting software to ensure all transactions are accurately recorded and accounted for.'},
    {name:'Expense Tracking', description:'Managing and categorizing expenses to provide a clear picture of a business\'s financial health and help with budgeting.'},
    {name:'Accounts Payable (AP) and Accounts Receivable (AR) Management', description:'Handling vendor bills, payments, and client invoicing, including tracking outstanding payments and following up on overdue invoices.'},
    {name:'Financial Reporting', description:'Generating regular financial reports, such as profit and loss statements, balance sheets, and cash flow reports, to provide clients with insights into their financial performance.'},
    {name:'Budgeting and Forecasting', description:'Assisting clients in creating and maintaining budgets, as well as preparing financial forecasts to aid in decision-making and planning.'},
    {name:'Audit Support', description:'Preparing financial records and documentation for audits conducted by tax authorities or external auditors, even when they are conducted remotely.'},
    {name:'Financial Analysis and Advisory', description:'Offering financial advice, analyzing financial data, and providing insights to help clients make informed decisions and improve their financial position.'},
    {name:'Data Security and Compliance', description:'Ensuring that sensitive financial data is securely stored and transmitted while adhering to data protection regulations and best practices.'},
    {name:'Virtual CFO Services', description:'Providing higher-level financial management and strategic planning services to small and medium-sized businesses, acting as a virtual Chief Financial Officer.'},
    {name:'Multi-Currency Accounting', description:'For businesses with international operations, handling transactions in multiple currencies and managing exchange rate fluctuations remotely.'},
    {name:'Customized Reporting', description:'Creating custom financial reports tailored to a client\'s specific needs and preferences.'},
  ],
  data_entry: [
    {name:'Online Data Entry', description:'Inputting data from various online sources into databases, spreadsheets, or content management systems. This includes forms processing, online surveys, and e-commerce data entry.'},
    {name:'Medical and Healthcare Data Entry', description:'Healthcare providers often outsource data entry services to manage patient records, medical billing, insurance claims, and other healthcare-related data.'},
    {name:'Financial Data Entry', description:'Financial institutions and businesses require data entry for tasks like processing invoices, payroll data entry, expense reports, and accounting records.'},
    {name:'E-commerce Product Data Entry', description:'Online retailers need product data entry services to upload product details, prices, descriptions, and images to their e-commerce.'},
    {name:'Real Estate Data Entry', description:'Real estate companies and agencies outsource data entry to manage property listings, transaction records, and client information.'},
    {name:'Legal Data Entry', description:'Law firms and legal departments outsource data entry for tasks like case documentation, contract management, and legal research.'},
    {name:'Catalog Data Entry', description:'Creating and maintaining product catalogs, including updating prices, descriptions, and availability.'},
    {name:'Surveys and Market Research Data Entry', description:'Many organizations conduct surveys and market research, and the data collected needs to be accurately entered and analyzed.'},
    {name:'Inventory Data Entry', description:'Retailers and warehouses require data entry for inventory management, tracking stock levels, and order processing.'},
    {name:'Mailing List/Data Entry for Marketing', description:'Building and managing mailing lists, including email addresses and contact details for marketing campaigns.'},
    {name:'Handwritten Data Entry', description:'Converting handwritten documents, forms, or notes into digital formats, often for historical or archival purposes.'},
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
                  <div class="outline-none relative cursor-pointer w-full md:w-auto border-b last:border-0 md:border-0 border-stroke dark:border-strokedark flex items-center gap-4 py-2 xl:py-5 px-4 xl:px-12"
                  :class="{ 'active before:w-full before:h-1 before:bg-primary before:absolute before:bottom-0 before:left-0 before:rounded-tl-[4px] before:rounded-tr-[4px]': selected }">

                    <div class="hidden md:flex w-8 h-8 md:w-12.5 md:h-12.5 rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection items-center justify-center shrink-0 grow-0">
                      <p class="text-black dark:text-white font-medium">{{ index+1 }}</p>
                    </div>
                    <div class="lg:w-auto md:w-3/5">
                      <h5 class="text-black dark:text-white text-xs md:text-sm font-medium">{{item.tab_title}}</h5>
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
                <div class="flex space-x-8">
                  <div class="md:w-1/2">
                    <h2 class="text-black dark:text-white text-lg md:text-3xl xl:text-4xl font-bold mb-4">{{item.title}}</h2>
                    <div>
                      <ul class="mb-5 list-none">
                        <li class="py-1 flex" v-for="service in service_specifics[item.key]">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-2 text-primary dark:text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <div class="flex flex-wrap">
                            <h5 class="font-bold text-sm">{{ service.name }} </h5>
                            <p class="text-sm text-slate-500">{{ service.description }}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="hidden md:block md:w-1/2 h-[359px] w-[539px] bg-red-400 bg-no-repeat bg-cover">
                    <img :src="item.image" alt="Features" class="dark:hidden rounded-md" />
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