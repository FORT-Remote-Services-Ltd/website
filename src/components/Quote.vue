<template>
  <div>
    <!-- Button to open the modal -->
    <button @click="openModal" class="bg-blue-500 text-white px-4 py-2 rounded-md">
      Get Quote
    </button>

    <!-- Modal backdrop -->
    <div
        v-if="isModalOpen"
        class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <!-- Modal content -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Request a Quote</h2>

        <!-- Form to request a quote -->
        <form @submit.prevent="submitQuote">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
            <input
                type="text"
                id="name"
                v-model="formData.name"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
            />
          </div>

          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Your Email</label>
            <input
                type="email"
                id="email"
                v-model="formData.email"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
            />
          </div>

          <div class="mb-4">
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea
                id="message"
                v-model="formData.message"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                rows="4"
                required
            ></textarea>
          </div>

          <div class="text-right">
            <button
                type="button"
                @click="closeModal"
                class="mr-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      // Clear the form data if needed
      this.formData = {
        name: '',
        email: '',
        message: '',
      };
    },
    submitQuote() {
      // Handle the form submission here
      // You can send the form data to an API or perform any desired action
      // After submission, you can close the modal
      this.closeModal();
    },
  },
};
</script>

<style scoped>
/* Add custom styles for the modal and form if needed */
</style>
