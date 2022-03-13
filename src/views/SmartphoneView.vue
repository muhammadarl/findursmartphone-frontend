<template>
  <div>
    <NavbarComponents />

    <div class="container card shadow-xl my-10 mx-auto">
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a href="#"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                </path>
              </svg>
              Home
            </a>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span
                class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500 capitalize">smartphones</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <div class="container mx-auto card shadow-lg my-20">
      <SmartphoneListComponents :smartphones="smartphones" />
      <div class="flex items-center justify-center space-x-1 pb-10">
        <button v-if="currentPage > 1" class="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md" v-on:click="PreviousPage()">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
        </button>
        <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
          {{currentPage}}
        </a>
        <button class="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white" v-on:click="NextPage()">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
    <FooterComponents />
  </div>
</template>
<script>
  import NavbarComponents from "../components/NavbarComponents.vue"
  import FooterComponents from "../components/FooterComponents.vue"
  import SmartphoneListComponents from "../components/SmartphoneListComponents"
  import axios from 'axios'
  export default {
    name: "SmartphonesView",
    components: {
      NavbarComponents,
      FooterComponents,
      SmartphoneListComponents,
    },
    data() {
      return {
        token: '1|U2zYScjXJz8qlB0p5anVhhLQRPMYEfeWFqSo8s5r',
        smartphones: [],
        currentPage: 1,
      }
    },
    created() {
      document.title = "Smartphone"
    },
    mounted() {
      axios.get(`https://sleepy-sea-83124.herokuapp.com/api/smartphones?limit=12&page=${this.currentPage}`, {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      }).then(res => (this.smartphones = res.data.data.data)).catch(err => console.error(err));
    },methods: {
      NextPage(){
        const pageNumber = this.currentPage
        let CurrentPage = pageNumber + 1
        this.currentPage = CurrentPage
        axios.get(`https://sleepy-sea-83124.herokuapp.com/api/smartphones?limit=12&page=${CurrentPage}`, {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      }).then(res => (this.smartphones = res.data.data.data)).catch(err => console.error(err));
      },
      PreviousPage(){
        const pageNumber = this.currentPage
        let CurrentPage = pageNumber - 1
        this.currentPage = CurrentPage
        axios.get(`https://sleepy-sea-83124.herokuapp.com/api/smartphones?limit=12&page=${CurrentPage}`, {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      }).then(res => (this.smartphones = res.data.data.data)).catch(err => console.error(err));
      },
    },
  }
</script>
<style lang="">

</style>
