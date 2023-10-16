<script setup>
import SvgIcons from "@components/SvgIcons.vue";


const steps = [
  {title:'Initial Consultation', description:`Our process begins with a personalized consultation. During this one-on-one discussion, we'll delve into your specific financial needs, whether you're a business or an individual.Understanding your unique circumstances and goals allows us to tailor our services to your exact requirements.`, icon:'consultation'},
  {title:'Customized Service Plan', description:`Following the consultation, we develop a customized service plan. This plan outlines the scope of our services, the timeline for completion, and transparent pricing. You'll receive a clear and detailed proposal that ensures you know precisely what to expect.`, icon:'plan'},
  {title:'Secure Data Collection', description:`Once the plan is in place, we facilitate the secure collection of your financial data and relevant documents. You can conveniently upload these files through our encrypted portal or use a method of your preference. Your data's security is paramount to us, and we adhere to stringent data protection standards.`, icon:'security'},
  {title:'Expert Analysis and Data Entry', description:`With your financial information in our hands, our skilled team of bookkeepers and data entry specialists meticulously analyze and organize the data. We prioritize accuracy and compliance with industry standards and regulations. Every transaction is entered with precision to eliminate errors and maintain data integrity.`, icon:'analysis'},
  {title:'Cloud-Based Accessibility and Reporting', description:`Our cloud-based accounting system provides you with 24/7 access to your financial records and reports. You can stay informed about your financial status from anywhere in the world. We also provide regular financial reports, including income statements, balance sheets, and cash flow statements, to offer you valuable insights into your financial health.`, icon:'cloud'},
  {title:'Ongoing Support and Adaptation', description:`Our commitment to your financial success doesn't end with data entry and reporting. We offer ongoing support, readily available for any questions, assistance, or strategic discussions you may require. As your business or personal financial needs evolve, we adapt our services to ensure a continued, effective partnership.`, icon:'support'},
]


</script>

<template>
 <div id="howItWorks" class="max-w-7xl rounded-xl mx-auto px-4 md:px-4 xl:px-10 py-10 bg-gradient-to-br from-teal-600 to-emerald-400 text-white">
  <div class="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-5">
    <div class="col-span-6 flex flex-col space-y-4">
      <h2 class="text-4xl font-bold">Our Process</h2>
      <p class="text-lg">
        Discover how we make freelancing a breeze with our simple and transparent process, guiding you from sign-up to project completion. Join us and experience the ease and reliability of freelancing at its best.
      </p>
    </div>
    <div class="col-span-6 bg-red-400 rounded shadow-xl h-[300px] bg-[url('/images/process.jpg')] bg-cover bg-no-repeat relative overflow-clip">
      <div class="absolute bottom-0 w-full h-[100px] bg-gradient-to-b from-black/0 via-black/50 to-black/100 px-4 py-2 flex align-text-bottom flex-end">
        <p class="text-lg absolute bottom-5">
          We turn freelancing into a seamless and hassle-free experience for everyone.
        </p>
      </div>
    </div>
  </div>

   <div class="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-5 mt-10">
     <template v-for="(step, i) in steps">
       <div class="col-span-4 flex flex-col space-y-4">
         <span id="icon" class="bg-teal-50/40 border border-teal-50 flex items-center justify-center h-12 w-12 font-bold text-white rounded-full p-2">
           {{i+1}}
           <!--<SvgIcons :name="step.icon" />-->
         </span>
         <h4 id="header" class="font-bold text-lg">{{ step.title }}</h4>
         <p id="content">{{step.description}}</p>
       </div>
     </template>
   </div>

</div>
</template>

<style>

</style>