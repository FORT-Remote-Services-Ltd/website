<script setup>
import emailJs from '@emailjs/browser';
import {ref, watch} from 'vue';
import {NButton} from 'naive-ui'

const Mailer = emailJs
Mailer.init("q5xnzVuOu_y8APxuk");

    //toast data
    const toast_el = ref(null)

    const toast = ref({
      title: '',
      description: '',
      type: '',
      show: false
    })

    watch(() => toast.value.show, () => {
      if (toast.value.show){
        //open
        toast_el.value.classList.remove('-translate-y-1.5')
        toast_el.value.classList.add('bottom-5')
        console.log('Showing', toast_el.value)
      }else{
        //close
        console.log('Hidding')
      }
    })

    //form
    const name = ref('')
    const phone = ref('')
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
      zip.value = ''
      country.value = ''
      subject.value = ''
      state.value = ''
      email.value = ''
      message.value = ''

    }

    //send meail
    /**/const sendMail = () => {
      sending.value = true
      Mailer.send("fortremoteservices@gmail","template_iw7v2dt",{
          to_name: 'FORT Remote',
          from_name:`${name.value}`,
          phone: phone.value,
          message: message.value,
          subject: subject.value,
          state: state.value,
          zip: zip.value,
          email: email.value,
          reply_to: email.value,
          country: email.value,
      }).then((res)=>{
        console.log('Email sent successfully: ', res)
        if (res.text.toLowerCase() === 'ok'){
          toast.value.title = 'Message sent successfully!'
          toast.value.description = 'We\'ll be replying to your message shortly. Thank you for reaching out.'
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

</script>

<template>
  <div ref="toast_el" :class="[
      toast.show ? 'bottom-5' : '-bottom-[100%]'
  ]" class="w-screen fixed" style="transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);">
      <div class="bg-white border border-slate-200 px-3 py-2 rounded-md shadow-xl z-50 w-fit mx-auto flex space-x-2 max-w-[50%]">
        <span>
          <svg v-if="toast.type === 'success'" xmlns="http://www.w3.org/2000/svg" class="h-6 text-green-600 " viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.59 7.59a.996.996 0 0 1-1.41 0z" fill="currentColor"></path></svg>

          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 text-red-600" viewBox="0 0 24 24"><path d="M14.9 3H9.1c-.53 0-1.04.21-1.42.59l-4.1 4.1C3.21 8.06 3 8.57 3 9.1v5.8c0 .53.21 1.04.59 1.41l4.1 4.1c.37.38.88.59 1.41.59h5.8c.53 0 1.04-.21 1.41-.59l4.1-4.1c.38-.37.59-.88.59-1.41V9.1c0-.53-.21-1.04-.59-1.41l-4.1-4.1c-.37-.38-.88-.59-1.41-.59zm.64 12.54a.996.996 0 0 1-1.41 0L12 13.41l-2.12 2.12a.996.996 0 1 1-1.41-1.41L10.59 12L8.46 9.88a.996.996 0 1 1 1.41-1.41L12 10.59l2.12-2.12a.996.996 0 1 1 1.41 1.41L13.41 12l2.12 2.12c.4.39.4 1.03.01 1.42z" fill="currentColor"></path></svg>

        </span>
        <div>
          <h5 class="font-semibold">{{toast.title}}</h5>
          <p class="text-xs">{{toast.description}}</p>
          <div class="mt-2 w-full flex justify-end">
            <NButton @click="toast.show = false" size="small" type="default">Close</NButton>
          </div>
        </div>
      </div>
  </div>

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
                        class="w-full bg-transparent border-b focus:border-teal-600 border-stroke dark:border-strokedark focus-visible:outline-none dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white rounded"
                    ></textarea>
          </div>

          <div class="flex flex-wrap xl:justify-between gap-10 xl:gap-15">

            <button :disabled="sending" class="inline-flex items-center gap-2.5 bg-black hover:bg-blackho ease-in-out duration-300 dark:bg-btndark font-medium text-white rounded-full px-6 py-3 disabled:opacity-60">
              <span v-if="sending" class="h-6 w-6 animate-spin" style="transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-auto" viewBox="0 0 20 20"><g fill="none"><path d="M10 3.5A6.5 6.5 0 0 0 3.5 10A.75.75 0 0 1 2 10a8 8 0 1 1 8 8a.75.75 0 0 1 0-1.5a6.5 6.5 0 1 0 0-13z" fill="currentColor"></path></g></svg>
              </span>

             <span>Send Message</span>
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