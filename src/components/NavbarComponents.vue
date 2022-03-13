<template>
    <nav class="p-5 bg-white shadow md:flex md:items-center md:justify-between">
        <div class="flex justify-between items-center">
            <span class="text-2xl cursor-pointer">
                <img src="../assets/logo/logo.png" class="h-10 inline" alt="logo">
            </span>
            <!-- <span class="text-3xl cursor-pointer mx-2 md:hidden block">
                <img id='menu' src="../assets/icon/menu.svg" alt="">
            </span> -->
        </div>
        <ul
            class="md:flex md:item-center items-center">
            <li class="mx-4 my-6 md:my-0">
                <router-link class="text-m hover:text-gray-700 duration-500 capitalize font-semi-light"
                    to="/">home</router-link>
            </li>
            <li class="mx-4 my-6 md:my-0">
                <router-link class="text-m hover:text-gray-700 duration-500 capitalize font-semi-light"
                    to="/smartphones">smartphone</router-link>
            </li>
            <a href="http://sleepy-sea-83124.herokuapp.com/register"
                class="bg-gray-800 text-white font-bold capitalize py-2 px-6 rounded duration-500 mx-4 hover:bg-gray-700">become
                partner</a>
        </ul>
    </nav>
</template>
<script>
    export default {
        name: "NavbarComponents",
        methods:{
        }
    }
</script>
<style lang="">

</style>