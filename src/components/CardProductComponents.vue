<template lang="">
    <div class=" flex rounded-lg bg-white shadow-md overflow-hidden mb-10">
        <div class="p-4 bg-purple-900 w-56">
            <div class="text-purple-400 uppercase tracking-wider text-sm">Recommendation Product</div>
            <div class="text-white text-2xl">{{product.product_name}}</div>
        </div>
        <div class="p-4 w-96">
            <div class="flex justify-between">
                <div class="text-purple-400 uppercase tracking-wider text-sm">{{product.daerah}}</div>
            </div>
            <div class="text-3xl text-purple-900">Rp. {{product.harga_product}}</div>
            <div class="flex justify-end pt-12">
                <a :href="product.link_product"
                    class="px-12 py-2 bg-purple-900 rounded-full text-purple-100 text-lg shadow-md hover:bg-purple-800">
                    Continue
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:"CardProductComponents",
        props:['product']
    }
</script>
<style lang="">

</style>