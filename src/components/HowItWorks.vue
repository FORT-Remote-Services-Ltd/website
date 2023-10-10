<template>
  <div class="">
    <h2 class="font-bold text-3xl flex justify-around xl:text-sectiontitle3 text-black dark:text-white md:w-4/5 xl:w-1/2 mx-auto py-10 ">How it Works</h2>
  <ul role="list" class="grid grid-cols-1 mx-60 my-8 gap-20 mt-10 sm:grid-cols-2 lg:grid-cols-2">
    <li v-for="step in steps" :key="step.id" class="col-span-1 bg-white rounded-b-3xl shadow-2xl divide-y divide-gray-200">
      <div class="border-t-4 border-teal-500">
          <button class="bg-teal-600 rounded-b-2xl hover:cursor-pointer text-white px-3 py-2 font-bold uppercase "> {{step.id}} </button>
      </div>

      <div class="w-full flex items-center justify-between p-6 space-x-6">
        <div class="flex-1 truncate">
          <div class="flex justify-around items-center space-x-2">
<!--            <h3 class="text-gray-900 bg-blue-300 rounded-full h-20 w-20 text-center mt-10 text-sm font-medium truncate">Step 1</h3>-->

<!--            <span class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">{{ person.role }}</span>-->
          </div>
          <div>
            <p class="flex font-bold  justify-around mt-1 text-gray-500 text-xl truncate underline">{{ step.title }}</p>
          </div>
          <div class="">
            <p class="whitespace-pre-wrap">{{step.description}}</p>
          </div>


        </div>
<!--        <img class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" :src="person.imageUrl" alt="" />-->
      </div>
<!--      <div>-->
<!--        <div class="-mt-px flex divide-x divide-gray-200">-->
<!--          <div class="w-0 flex-1 flex">-->
<!--            <a :href="`mailto:${person.email}`" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">-->
<!--              &lt;!&ndash;              <MailIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />&ndash;&gt;-->
<!--              <span class="ml-3">Email</span>-->
<!--            </a>-->
<!--          </div>-->
<!--          <div class="-ml-px w-0 flex-1 flex">-->
<!--            <a :href="`tel:${person.telephone}`" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">-->
<!--              &lt;!&ndash;              <PhoneIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />&ndash;&gt;-->
<!--              <span class="ml-3">Call</span>-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </li>
  </ul>
  </div>
</template>


<script>


const people = [
  {
    name: 'Jane Cooper',
    step: 'step 1',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },

  // More people...
]

export default {
  name: "HowItWorks",
  components: {

  },
  setup() {
    return {
      people,
    }
  },
  data() {
    return {
      steps: [
        {
          title: "Consultation and Assessment",
          id: 'step 1',
          img: '../images/brand/whatsapp.svg',
          description:
              "Contact Us: Start by reaching out to us through our website or via email. Our dedicated team will promptly get in touch with you to schedule an initial consultation.Needs Assessment: During the consultation, we'll discuss your specific business requirements and objectives. This step allows us to understand your unique needs and tailor our services accordingly.",
        },
        {
          title: "Customized Solution Design",
          id: 'step 2',
          description:
              "Service Selection: Based on our assessment, we'll recommend the most suitable services for your business. Whether it's bookkeeping, data entry, or virtual customer care, you'll have a tailored solution.Proposal and Agreement: We'll provide you with a detailed proposal outlining the scope of work, pricing, and service delivery timelines. Once you're satisfied, we'll proceed to create a service agreement.",
        },

        {
          title: "Onboarding and" +
              "Integration Data Collection",
          id: 'step 3',
          description:
              "For bookkeeping and data" +
              "entry services, we'll work" +
              "with you to securely gather" +
              "the necessary information" +
              "and access to relevant" +
              "systems. For virtual customer" +
              "care, we'll align our team" +
              "with your brand and" +
              "protocols. Integration Setup: Our technical" +
              "team will assist with any" +
              "necessary integrations, ensuring" +
              "a seamless flow of data and" +
              "communication.",
        },
        {
          title: "Service DeliveryEfficient Execution",
          id: 'step 4',
          description:
              "Our skilled professionals will handle" +
              "your bookkeeping, data entry, or virtual customer care tasks efficiently and" +
              "accurately. You can expect regular updates and reports as agreed upon. Quality Assurance: We maintain rigorous quality control measures to ensure that the services we provide meet our high standards.",
        },
        {
          title: "Success and Growth Measurable Results",
          id: 'step 5',
          description:
              " As we work together," +
              "you'll begin to see measurable improvements in your operations, financial" +
              "management, or customer satisfaction. Continual Improvement: We're committed to staying at the forefront of our respective industries, ensuring that you benefit from the latest tools and strategies.",
        },
        {
          title: "Long-Term Partnership Trusted Relationship",
          id: 'step 6',
          description:
              " We aim to build a" +
              "long-lasting partnership based on trust, reliability, and a shared" +
              "commitment to your business's success. ",
        }
        // Add similar objects for Steps 3 to 7
        // ...
      ],
    };
  },
};
</script>

<style scoped>
/* Custom styles or Tailwind CSS classes for animations and transitions */
</style>
