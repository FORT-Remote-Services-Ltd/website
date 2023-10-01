<template>
  <div class="fixed bottom-5 right-5 flex flex-col justify-end z-20">
    <TransitionRoot as="template" :show="open">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
        <div class="bg-white w-[200px]  md:w-[350px] rounded-md shadow-2xl shadow-brand-navy/60">
          <!--bg-gradient-to-br from-20% from-brand-navy-->
          <header class="relative bg-[#095e54] text-white rounded-t-md p-3 py-4">
            <div class="flex space-x-2">
              <div class="h-10 w-10 border-2 border-green-400 shrink-0 grow-0 flex justify-center items-center rounded-full">
                <img src="/favicon.svg" class="w-8 rounded-2xl" alt="Well Led Care logo">
              </div>
              <div>
                <h3 class="text-sm font-bold text-white tracking-wide">FORT Company Support</h3>
                <p class="text-[10px] text-slate-200">Replies within 1 hr</p>
              </div>
            </div>
            <button @click="open = false" class="absolute right-2 top-2 bg-brand-navy/30 hover:scale-105 transition-all flex justify-center items-center shrink-0 grow-0 h-5 w-5 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-brand-green" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </button>
          </header>
          <div class="relative bg-[#E5DDD4] h-[200px] py-4 px-5"   style="background-image:linear-gradient(rgb(229,221,212,0.9), rgb(229,221,212,0.9))">
            <div class="relative chat_message bg-white min-w-[150px] w-fit px-3 py-2 rounded-r-md rounded-b-md">
              <h6 id="name" class="text-gray-400 text-[11px] font-medium tracking-wide">FORT Company Support</h6>
              <p id="message" class="text-sm py-2 leading-relaxed">
                hi there 👋<br>
                How can I help you?
              </p>
              <div class="flex justify-end">
                <small class="text-gray-300 text-[10px]">12.42 pm</small>
              </div>
            </div>
          </div>
          <div class="py-3 px-2 bg-white rounded-b-md">
            <div class="mt-1 relative rounded-md shadow-sm">
              <input @keyup.enter="sendChat" v-model="message" type="text" name="price" id="price" class="focus:ring-green-500 focus:border-green-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Type your message" aria-describedby="price-currency">
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button @click="sendChat">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class="h-5 fill-slate-400 hover:fill-slate-500"><g><path d="M51.7 29.2c-38.8 0-63.8 41.3-45.7 75.7l66.2 125.6L294.3 256 72.2 281.6 6 407.2c-18.1 34.4 6.8 75.7 45.7 75.7 7 0 14-1.4 20.5-4.2l409.8-177c40-17.3 40-74 0-91.3L72.2 33.4c-6.5-2.8-13.5-4.2-20.5-4.2z" class=""></path></g></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </TransitionChild>
    </TransitionRoot>


    <div class="mt-2 flex justify-end">
      <!--target="_blank" href="https://api.whatsapp.com/send?phone=447878177928&text=Hello,%20am%20interested%20in%20your%20services%20at%20Well%20Led%20Care"-->
      <button @click="open = !open" class="flex items-center justify-center h-12 w-12 rounded-full shrink-0 grow-0 bg-green-600 shadow-2xl p-2 hover:scale-105 transition-all duration-300 focus:ring-2 focus:ring-green-500/60 focus:ring-offset-1">
        <SvgIcons name="whatsapp" />
      </button>
    </div>
  </div>
</template>

<script setup>
import SvgIcons from "./SvgIcons.vue";
import { TransitionChild, TransitionRoot } from '@headlessui/vue'
import {ref} from "vue";

const open = ref(false)
const message = ref('')

const sendChat = () => {
  if (message.value.length > 0){
    let url = `https://api.whatsapp.com/send?phone=12679958208&text=${message.value}`
    window.open(url, '_blank')
    message.value = ''
  }
}

</script>
<style>
.chat_message::before {
  position: absolute;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAMAAADp2asXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACQUExURUxpccPDw9ra2m9vbwAAAAAAADExMf///wAAABoaGk9PT7q6uqurqwsLCycnJz4+PtDQ0JycnIyMjPf3915eXvz8/E9PT/39/RMTE4CAgAAAAJqamv////////r6+u/v7yUlJeXl5f///5ycnOXl5XNzc/Hx8f///xUVFf///+zs7P///+bm5gAAAM7Ozv///2fVensAAAAvdFJOUwCow1cBCCnqAhNAnY0WIDW2f2/hSeo99g1lBYT87vDXG8/6d8oL4sgM5szrkgl660OiZwAAAHRJREFUKM/ty7cSggAABNFVUQFzwizmjPz/39k4YuFWtm55bw7eHR6ny63+alnswT3/rIDzUSC7CrAziPYCJCsB+gbVkgDtVIDh+DsE9OTBpCtAbSBAZSEQNgWIygJ0RgJMDWYNAdYbAeKtAHODlkHIv997AkLqIVOXVU84AAAAAElFTkSuQmCC");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  content: "";
  top: 0px;
  left: -12px;
  width: 12px;
  height: 19px;
}
</style>