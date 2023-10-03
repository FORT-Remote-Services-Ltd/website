<template>
  <div class="bg-gradient-to-b from-blue-400 to-indigo-600 py-16">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          How It Works
        </h2>
      </div>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
              v-for="(step, index) in steps"
              :key="index"
              class="relative rounded-lg bg-white p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div
                class="absolute top-0 left-0 w-full h-full rounded-lg opacity-20 bg-gradient-to-b from-indigo-500 to-blue-500 z-[-1] transform -skew-y-12"
            ></div>
            <div class="relative z-10">
              <div class="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white text-2xl">
                {{ index + 1 }}
              </div>
              <h3 class="mt-4 text-lg font-semibold text-gray-900">{{ step.title }}</h3>
              <p class="mt-2 text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowItWorks",
  data() {
    return {
      steps: [
        {
          title: "Consultation and Assessment",
          description:
              "Contact Us: Start by reaching out to us through our website or via email. Our dedicated team will promptly get in touch with you to schedule an initial consultation.\n\nNeeds Assessment: During the consultation, we'll discuss your specific business requirements and objectives. This step allows us to understand your unique needs and tailor our services accordingly.",
        },
        {
          title: "Customized Solution Design",
          description:
              "Service Selection: Based on our assessment, we'll recommend the most suitable services for your business. Whether it's bookkeeping, data entry, or virtual customer care, you'll have a tailored solution.\n\nProposal and Agreement: We'll provide you with a detailed proposal outlining the scope of work, pricing, and service delivery timelines. Once you're satisfied, we'll proceed to create a service agreement.",
        },

        {
          title: "Onboarding and\n" +
              "Integration Data Collection",
          description:
              "For bookkeeping and data\n" +
              "entry services, we'll work\n" +
              "with you to securely gather\n" +
              "the necessary information\n" +
              "and access to relevant\n" +
              "systems. For virtual customer\n" +
              "care, we'll align our team\n" +
              "with your brand and\n" +
              "protocols. Integration Setup: Our technical\n" +
              "team will assist with any\n" +
              "necessary integrations, ensuring\n" +
              "a seamless flow of data and\n" +
              "communication.",
        },
        {
          title: "Service DeliveryEfficient Execution",
          description:
              "Our skilled professionals will handle\n" +
              "your bookkeeping, data entry, or virtual customer care tasks efficiently and\n" +
              "accurately. You can expect regular updates and reports as agreed upon. Quality Assurance: We maintain rigorous quality control measures to ensure that the services we provide meet our high standards.",
        },
        {
          title: "Success and Growth Measurable Results",
          description:
              " As we work together,\n" +
              "you'll begin to see measurable improvements in your operations, financial\n" +
              "management, or customer satisfaction. Continual Improvement: We're committed to staying at the forefront of our respective industries, ensuring that you benefit from the latest tools and strategies.",
        },
        {
          title: "Long-Term Partnership Trusted Relationship",
          description:
              " We aim to build a\n" +
              "long-lasting partnership based on trust, reliability, and a shared\n" +
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
