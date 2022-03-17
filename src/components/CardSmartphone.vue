<template>
    <div class="w-80 h-max bg-white shadow-xl rounded-lg overflow-hidden ">
        <img class="mx-auto" :src="image_url" :alt="model">
        <div class="py-4 px-5">
            <p class="text-gray-800 uppercase tracking-wide font-bold text-[12px]">
                {{brand}}
            </p>
            <h1 class="text-2xl font-bold text-gray-800">{{model}}</h1>
            <p>{{memory}}GB/{{storage}}GB</p>
            <p class="font-bold text-gray-800">{{color}}</p>
            <div class="flex justify-center">
                <p class="bg-yellow-500 py-2 px-8 rounded text-gray-100 mr-2">{{score}}</p>
                <p class="bg-green-800 py-2 px-8 rounded text-gray-200"><fa icon="star" /> {{rating}}</p>
            </div>
            <p class="font-bold my-5">{{specs}}</p>
            <p class="font-bold my-5">Rp. {{price}}</p>
            <router-link :to="`/smartphones/${id}`" class="bg-orange-500 py-2 px-8 rounded text-gray-100">More <fa icon="arrow-right" /></router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'CardSmartphone',
    props: {
            id:Number,
            image_url: String,
            brand: Number,
            model: String,
            score: Number,
            rating: Number,
            price: Number,
            memory: Number,
            storage: Number,
            color: String,
            specs: String,
        }
}
</script>