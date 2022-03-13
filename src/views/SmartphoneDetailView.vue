<template lang="">
    <div>
        <NavbarComponents />
        <div class="container card shadow-xl my-10 mx-auto">
            <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                        <router-link to="/"
                            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                                </path>
                            </svg>
                            Home
                        </router-link>
                    </li>
                    <li class="inline-flex items-center">
                        <router-link to="/smartphones" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            Smartphone
                        </router-link>
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
                                class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500 capitalize">{{smartphones.brand}} {{smartphones.model}}</span>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
        <div class="container pt-4 pb-6 grid lg:grid-cols-2 gap-6 text-left my-20">
            <div>
                <div>
                    <img id="main-img" :src="smartphones.image_url" class="w-1/2 mx-auto">
                </div>
            </div>
            <div>
                <h2 class="md:text-3xl text-2xl font-medium uppercase mb-2">{{smartphones.model}}</h2>
                <div class="flex items-center mb-4">
                    <div class="text-m text-gray-500">{{(smartphones.brand)}}</div>
                </div>
                <div class="space-y-2">
                    <table class="text-left w-full border-collapse mb-10">
                        <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
                        <thead>
                            <tr>
                                <th
                                    class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    color</th>
                                <td
                                    class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    {{smartphones.color}}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th
                                    class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    memory</th>
                                <td
                                    class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    {{smartphones.memory}} GB</td>
                            </tr>
                            <tr>
                                <th
                                    class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    storage</th>
                                <td
                                    class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    {{smartphones.storage}} GB</td>
                            </tr>
                            <tr>
                                <th
                                    class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    original price</th>
                                <td
                                    class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    Rp. {{smartphones.original_price}}</td>
                            </tr>
                            <tr>
                                <th
                                    class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    selling price</th>
                                <td
                                    class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    Rp. {{smartphones.selling_price}}</td>
                            </tr>
                            <tr>
                                <th
                                    class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    rating</th>
                                <td
                                    class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    {{smartphones.rating}} / 5</td>
                            </tr>
                            <tr>
                                <th
                                    class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    score</th>
                                <td
                                    class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    {{smartphones.score}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 class="md:text-3xl text-2xl font-medium uppercase mb-2">penawaran terkait dengan
                        {{smartphones.brand}} {{smartphones.model}}</h2>
                    <div v-if="products.length > 0">
                        <CardProductComponents v-for="product in products" v-bind:key="product.id" :product="product" />
                    </div>
                    <div v-else>
                        <h2 class="md:text-3xl text-2xl font-medium uppercase mb-2 mt-10">tidak ada penawaran terkait
                            dengan {{smartphones.brand}} {{smartphones.model}}</h2>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponents />
    </div>
</template>
<script>
    import NavbarComponents from "../components/NavbarComponents.vue"
    import FooterComponents from "../components/FooterComponents.vue"
    import CardProductComponents from "../components/CardProductComponents.vue"
    import axios from 'axios'
    export default {
        name: "SmartphonesDetailView",
        components: {
            NavbarComponents,
            FooterComponents,
            CardProductComponents
        },
        data() {
            return {
                smartphones: [],
                products: [],
                id_smartphone: this.$route.params.id,
                token: '1|U2zYScjXJz8qlB0p5anVhhLQRPMYEfeWFqSo8s5r',
            }
        },
        mounted() {
            axios.get(`https://sleepy-sea-83124.herokuapp.com/api/smartphones?id=${this.id_smartphone}`, {
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                }
            }).then(res => (this.smartphones = res.data.data[0])).catch(err => console.error(err));
            axios.get(`https://sleepy-sea-83124.herokuapp.com/api/products?id_smartphone=${this.id_smartphone}`, {
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                }
            }).then(res => (this.products = res.data.data.data)).catch(err => console.error(err));

        },
        created() {
            document.title = `Detail Smartphone`;
        }
    }
</script>
<style lang="">

</style>