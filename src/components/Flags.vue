<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
<!--    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Pinned Projects</h2>-->
    <ul role="list" class=" grid grid-cols-1 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <li v-for="project in projects" :key="project.name" class=" flex rounded-md">
        <div :class="[ 'flex-shrink-0 flex items-center justify-center   text-white text-sm font-medium p-5']">
          <span :class="[project.code, 'flag-icon', 'flag-icon-squared']"></span>
        </div>
        <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded ">
          <div class=" px-5  text-sm ">
            <a :href="project.href" class="text-gray-900 font-medium hover:text-gray-600">{{ project.country }}</a>
<!--            <p class="text-gray-500">{{ project.members }} Members</p>-->
          </div>
          <div class="flex-shrink-0 pr-2">
<!--            <button type="button" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="sr-only">Open options</span>
              <DotsVerticalIcon class="w-5 h-5" aria-hidden="true" />
            </button>-->
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { DotsVerticalIcon } from '@heroicons/vue/solid'
import Flags from "/node_modules/flag-icons/css/flag-icons.min.css";

const projects = [
  { country: 'India', initials: 'GA', code: 'fi fi-in', href: '#', members: 16, bgColor: 'bg-white' },
  { country: 'Poland', initials: 'CD',code: 'fi fi-pl', href: '#', members: 12, bgColor: 'bg-white' },
  { country: 'Philippines', initials: 'CD',code: 'fi fi-ph', href: '#', members: 12, bgColor: 'bg-white' },
  { country: 'Ukraine', initials: 'CD',code: 'fi fi-ua', href: '#', members: 12, bgColor: 'bg-white' },
  { country: 'United States', initials: 'CD',code: 'fi fi-us', href: '#', members: 12, bgColor: 'bg-white' },
  { country: 'Mexico', initials: 'CD',code: 'fi fi-mx', href: '#', members: 12, bgColor: 'bg-white' },
  { country: 'Canada', initials: 'CD',code: 'fi fi-ca', href: '#', members: 12, bgColor: 'bg-white' },
  { country: 'Argentina', initials: 'CD',code: 'fi fi-ar', href: '#', members: 12, bgColor: 'bg-white' },
  { country: 'United Kingdom', initials: 'CD',code: 'fi fi-gb', href: '#', members: 12, bgColor: 'bg-white' },
  { country: 'Brazil', initials: 'CD',code: 'fi fi-br', href: '#', members: 12, bgColor: 'bg-white' },
  { country: 'Australia', initials: 'CD',code: 'fi fi-mx', href: '#', members: 12, bgColor: 'bg-white' },
  { country: 'South Africa', initials: 'CD',code: 'fi fi-mx', href: '#', members: 12, bgColor: 'bg-white' },
  { country: 'Mexico', initials: 'CD',code: 'fi fi-mx', href: '#', members: 12, bgColor: 'bg-white' },
  { country: 'Mexico', initials: 'CD',code: 'fi fi-mx', href: '#', members: 12, bgColor: 'bg-white' },



]

export default {
  components: {
    DotsVerticalIcon,
    Flags,
  },
  setup() {
    return {
      projects,
    }
  },
}
</script>