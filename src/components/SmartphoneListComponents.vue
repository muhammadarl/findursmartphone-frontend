<template>
     <!-- <div class="flex justify-center"> -->
        <!-- <input class="w-1/2 shadow p-5 rounded ml-5" type="text" placeholder="Search" />
        <select name="sort" class="rounded shadow ml-5 capitalize px-5" id="sort">
          <option value="ascending">score ascending</option>
          <option value="descending">score descending</option>
        </select>
      </div> -->
      <div class="flex flex-wrap py-20 mx-10 justify-center">
        <div class="mx-auto my-10" v-for="smartphone in smartphones" v-bind:key="smartphone.id">
          <CardSmartphone :image_url="smartphone.image_url" :brand="smartphone.brand" :model="smartphone.model"
            :score="smartphone.score" :rating="smartphone.rating" :price="smartphone.original_price" :id="smartphone.id"
            :memory="smartphone.memory" :specs="smartphone.specs" :storage="smartphone.storage" :color="smartphone.color" />
        </div>
      </div>
     
</template>
<script>
    import CardSmartphone from "../components/CardSmartphone.vue"
export default {
    name: "SmartphoneListComponents",
    components: {
        CardSmartphone,
    },
    props:['smartphones', 'allSmartphones'],
}
</script>
<style scoped>

</style>