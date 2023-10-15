<script setup>
import {ref, onMounted, onUnmounted} from "vue";
const stickyMenu = ref(false)
const navigationOpen = ref(false)
function handleScroll(e){
  stickyMenu.value = window.pageYOffset > 20;
}
//modal

// Add scroll event listener when the component is mounted
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Remove the scroll event listener when the component is unmounted
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
// Initial check for stickiness
handleScroll();
</script>

<template>

  <header
    class="fixed left-0 top-0 w-full z-99999 py-7"
    :class="{ 'bg-white dark:bg-black shadow !py-4 transition duration-100' : stickyMenu }">
    <div class="mx-auto max-w-c-1390 px-4 md:px-10 xl:px-20 lg:flex items-center justify-between relative max-h-[400px]" >
      <div class="flex items-center justify-between">
        <a href="/">
          <img class="dark:hidden h-[50px]" src="/images/logo/logo-light.svg" alt="Logo Light" />
          <img class="hidden dark:block" src="/images/logo/logo-dark.svg" alt="Logo Dark" />
        </a>

        <button class="lg:hidden block" @click="navigationOpen = !navigationOpen">
          <span class="block relative cursor-pointer w-5.5 h-5.5">
            <span class="block absolute w-full h-full">
              <span class="block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-[0]" :class="{ '!w-full delay-300': !navigationOpen }"></span>
              <span class="block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-150" :class="{ '!w-full delay-400': !navigationOpen }"></span>
              <span class="block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-200" :class="{ '!w-full delay-500': !navigationOpen }"></span>
            </span>
            <span class="block absolute w-full h-full rotate-45">
              <span class="block bg-black dark:bg-white rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-full" :class="{ 'h-0 delay-[0]': !navigationOpen }"></span>
              <span class="block bg-black dark:bg-white rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-2.5 w-full h-0.5" :class="{ 'h-0 delay-200': !navigationOpen }"></span>
            </span>
          </span>
        </button>
      </div>

      <div
        class="h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between"
        :class="{ '!visible bg-white dark:bg-blacksection shadow-solid-5 h-auto max-h-[400px] overflow-y-scroll rounded-md mt-4 p-7.5': navigationOpen }"
      >
        <nav>
          <ul class="text-md font-medium flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-10">
            <li><a href="/" class="hover:text-primary">Home</a></li>
            <!--<li><a href="about-us" class="hover:text-primary">About Us</a></li>-->
            <li><a href="/#howItWorks" class="hover:text-primary">How It Works</a></li>
            <li><a href="/contact" class="hover:text-primary">Contact Us</a></li>
          </ul>
        </nav>

      </div>
        <div class="flex items-center gap-6 mt-7 lg:mt-0">
          <!--<div class="mr-1.5 absolute lg:static top-1 right-17" :class="navigationOpen ? '!visible' : '!visible'">-->
          <!--  <label class="block m-0 relative">-->
          <!--    <input type="checkbox" class="cursor-pointer w-full h-full opacity-0 absolute top-0 z-50 m-0" />-->
          <!--    <img class="dark:hidden" src="/images/icon/icon-sun.svg" alt="Sun" />-->
          <!--    <img class="hidden dark:block" src="/images/icon/icon-moon.svg" alt="Moon" />-->
          <!--  </label>-->
          <!--</div>-->

          <button @click="showModal">

        <a href="/get-quote"
           :class="[
               stickyMenu ? 'bg-primary hover:bg-primary text-white' : 'border border-primary hover:border-primary  text-primary',
             'flex items-center justify-center ease-in-out duration-300 text-regular rounded-full py-2.5 px-7.5', ''
           ]" >Get Quote</a>
          </button>
        </div>
    </div>
  </header>
</template>
