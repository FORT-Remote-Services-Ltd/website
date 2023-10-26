<script>
import emailJs from '@emailjs/browser';
import {ref} from 'vue';
import Toast from "./Toast.vue";

const Mailer = emailJs
Mailer.init("454WVnzKaYzokYZ3g");
export default {
  name: 'ContactUs',
  components: {Toast},

  setup() {
    //toast data

    const toast = ref({
      title: '',
      description: '',
      type: '',
      show: false
    })

    //form
    const name = ref('')
    const phone = ref('')
    const number = ref('')
    const zip = ref('')
    const country = ref('')
    const subject = ref('')
    const state = ref('')
    const email = ref('')
    const message = ref('')
    let sending = ref(false)

    //reset form
    const resetForm = () => {
      name.value = ''
      phone.value = ''
      number.value = ''
      zip.value = ''
      country.value = ''
      subject.value = ''
      state.value = ''
      email.value = ''
      message.value = ''

    }

    //send meail
    /**/const sendMail = () => {
      Mailer.send("service_7jdyxxj", "template_3r16flj",{
        to_name: 'Michael',
        from_name:`${name.value}`,
        phone: phone.value,
        message: message.value,
        email: email.value,
        reply_to: email.value
      }).then((res)=>{
        console.log('Email sent successfully: ', res)
        if (res.text.toLowerCase() === 'ok'){
          toast.value.title = 'Message sent successfully!'
          toast.value.description = 'I\'ll be replying to your message shortly. Thank you for reaching out.'
          toast.value.type = 'success'
          toast.value.show = true

          setTimeout(() => {
            toast.value.show = false
          }, 20000)
        }
      }).catch((error) =>{
        console.log('Email failed: ', error)
        toast.value.title = 'Error!'
        toast.value.description = 'Am sorry! Something went wrong when sending your message. Please try again later'
        toast.value.type = 'danger'
        toast.value.show = true

        setTimeout(() => {
          toast.value.show = false
        }, 20000)
      }).finally(() => {
        sending.value = false
        resetForm()
      });



    }


    return {sendMail, sending, toast, country,state, number, zip,  name,subject, email, phone, message}
   /* definePageMeta({
      layout: 'contact-layout'
    })*/
  }
}

</script>

<template>
  <div class="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row gap-4 xl:gap-20 md:justify-between">
    <div class="animate_top w-full md:w-3/5 lg:w-3/4 shadow-solid-8 rounded-lg bg-white dark:bg-black dark:border dark:border-strokedark p-8 xl:p-15">
      <h2 class="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-15">Send Us a Message</h2>

      <form @submit.prevent="sendMail" method="POST">
        <div class="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-7.5">
          <input
              type="text"
              v-model="name"
              placeholder="Full name"
              class="w-full lg:w-1/2 bg-transparent border-b focus:border-teal-600 border-stroke dark:border-strokedark focus-visible:outline-none dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white rounded"
          />

          <input
              type="email"
              v-model="email"
              placeholder="Email address"
              class="w-full lg:w-1/2 bg-transparent border-b focus:border-teal-600 border-stroke dark:border-strokedark focus-visible:outline-none dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white rounded"
          />
        </div>

        <div class="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-12.5">
          <input
              type="text"
              v-model="subject"
              placeholder="Subject"
              class="w-full lg:w-1/2 bg-transparent border-b focus:border-teal-600 border-stroke dark:border-strokedark focus-visible:outline-none dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white rounded"
          />

          <input
              type="text"
              v-model="phone"
              placeholder="Phone number"
              class="w-full lg:w-1/2 bg-transparent border-b focus:border-teal-600 border-stroke dark:border-strokedark focus-visible:outline-none dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white rounded rounded"
          />
        </div>

        <div class="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-12.5">
          <input
              type="text"
              v-model="country"
              placeholder="Country"
              class="w-full lg:w-1/2 bg-transparent border-b focus:border-teal-600 border-stroke dark:border-strokedark focus-visible:outline-none dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white rounded"
          />

          <input
              type="text"
              v-model="state"
              placeholder="State"
              class="w-full lg:w-1/2 bg-transparent border-b focus:border-teal-600 border-stroke dark:border-strokedark focus-visible:outline-none dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white rounded"
          />
        </div>

        <div class="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-12.5">
          <input
              type="number"
              v-model="number"
              placeholder="Personal Contact"
              class="w-full lg:w-1/2 bg-transparent border-b focus:border-teal-600 border-stroke dark:border-strokedark focus-visible:outline-none dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white rounded"
          />

          <input
              type="number"
              v-model="zip"
              placeholder="Zip Code"
              class="w-full lg:w-1/2 bg-transparent border-b focus:border-teal-600 border-stroke dark:border-strokedark focus-visible:outline-none dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white rounded"
          />
        </div>

        <div class="flex mb-11.5">
                  <textarea
                      placeholder="Message"
                      v-model="message"
                      rows="4"
                      class="w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
                  ></textarea>
        </div>

        <div class="flex flex-wrap xl:justify-between gap-10 xl:gap-15">
          <div>
            <label for="supportCheckbox" class="max-w-[425px] flex cursor-pointer select-none hover:text-primary">
              <div class="relative">
                <input type="checkbox" id="supportCheckbox" class="sr-only" />
                <div class="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark">
                          <span class="opacity-0">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" class="stroke-current">
                              <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  stroke-width="0.4"
                              ></path>
                            </svg>
                          </span>
                </div>
              </div>
              By clicking Checkbox, you agree to use our “Form” terms And consent cookie usage in browser.
            </label>
          </div>

          <button class="inline-flex items-center gap-2.5 bg-black hover:bg-blackho ease-in-out duration-300 dark:bg-btndark font-medium text-white rounded-full px-6 py-3">
            Send Message
            <svg class="fill-white" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" fill="" />
            </svg>
          </button>
        </div>
      </form>
    </div>
    
      <div class="animate_top w-full md:w-2/5 lg:w-[26%] md:p-7.5 xl:pt-15">
        <h2 class="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-12.5">Find us</h2>

        <div class="mb-7 5">
          <h4 class="font-medium text-black dark:text-white text-metatitle3 mb-4">Our Location</h4>
          <p>124 City Road, London, EC1V 2NX United Kingdom</p>
        </div>
        <div class="mb-7 5">
          <h4 class="font-medium text-black dark:text-white text-metatitle3 mb-4">Email Address</h4>
          <p><a href="#">sales@fortremote.pro</a></p>
        </div>
        <div>
          <h4 class="font-medium text-black dark:text-white text-metatitle3 mb-4">Phone Number</h4>
          <p><a href="#">+44 121 790 1866</a></p>
          <p><a href="#">+1 267-995-8208</a></p>
        </div>
        <div class="pt-2">
          <h4 class="font-medium text-black dark:text-white text-metatitle3 mb-4">WhatsApp Number</h4>
          <p><a href="#">+1 267-995-8208</a></p>
        </div>

      </div>


  </div>
</template>



<style>

</style>