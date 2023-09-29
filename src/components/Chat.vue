<script>
export default {
  data() {
    return {
      chatVisible: false,
      message: ''
    };
  },
  methods: {
    showChatDialog() {
      this.chatVisible = !this.chatVisible
    },
    sendMessage() {
      // Here, you can implement logic to send the message (e.g., through an API).

      // After sending, you can redirect to WhatsApp or perform any other action.
      // For simplicity, let's simulate a redirect to WhatsApp.
      window.location.href = 'https://wa.me/254741767083'; // Replace with your WhatsApp number

      // console.log(this.message);
    }


  }
};
</script>

<template>
  <a class="whatsapp_float" @click="showChatDialog">
    <img src="/images/brand/whatsapp.svg" alt="whatsapp">

  </a>

<!--  <button @click="showChatDialog" class="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 m-3">
    Chat
  </button>-->

  <div v-if="chatVisible" class="fixed bottom-28 right-2  flex items-center justify-end scale-x-100">
    <div class="bg-white p-4 rounded-lg shadow-md w-96">
      <!-- Chat Title -->
      <h2 class="text-lg font-semibold mb-4">Message Us</h2>

      <!-- Chat Message Input -->
      <textarea v-model="message" class="w-full h-32 p-2 border rounded-md mb-4" placeholder="Type your message..."></textarea>

      <!-- Send Button -->
      <button @click="sendMessage" class="bg-green-500 text-white p-2 rounded-md hover:bg-green-600">Whatsapp Us</button>
    </div>
  </div>
</template>


<style scoped>

.whatsapp_float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  //background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  //box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.whatsapp-icon {
  margin-top: 16px;
}

/* for mobile */
@media screen and (max-width: 767px) {
  .whatsapp-icon {
    margin-top: 10px;
  }

  .whatsapp_float {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 10px;
    font-size: 22px;
  }
}
</style>
