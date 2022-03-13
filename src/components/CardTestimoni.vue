<template>
    <div class="relative w-64 h-80 rounded">
        <div class="absolute -right-4 -bottom-4 bg-gray-400 h-full w-full rounded-xl"></div>
        <div class="relative bg-gray-800 text-gray-50 rounded-xl p-8 h-72 space-y-7">
            <div class="h-2 w-20 bg-gray-400"></div>
            <div class="text-3xl font-extrabold text-white">{{guest_name}}</div>
            <p class="leading-snug text-gray-400">{{testimoni}}</p>
            <a href="#" class="block text-yellow-400 font-bold tracking-wide flex">
                <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                </svg></a>
        </div>
    </div>
</template>
<script>
    export default {
        name:'CardTestimoni',
        props: {
            guest_name: String,
            testimoni: String,
        }
    }
</script>
<style lang="">

</style>