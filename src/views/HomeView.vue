<template>
  <div>
    <NavbarComponents />
    <swiper :slides-per-view="1" :space-between="0">
      <swiper-slide><img src="../assets/header/w-1.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/header/w-2.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/header/w-3.jpg" alt=""></swiper-slide>
    </swiper>
    <div class="container section-recommendation mx-auto py-20">
      <div class="title-subtitle flex-col mb-16">
        <h1 class="font-bold text-4xl uppercase">recommendation</h1>
        <h2 class="font-semibold text-lg capitalize">recommendation smartphone yang telah disediakan find ur smartphone</h2>
      </div>
      <div class="content-recommendation my-5">
        <swiper :slides-per-view="4" :space-between="20">
            <swiper-slide v-for="recommendation in recommendations" v-bind:key="recommendation.id">
              <CardSmartphone :image_url="recommendation.image_url" :color="recommendation.color" :brand="recommendation.brand" :model="recommendation.model" :score="recommendation.score" :rating="recommendation.rating" :id="recommendation.id" :price="recommendation.original_price" :memory="recommendation.memory" :storage="recommendation.storage"/>
            </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="container section-trending mx-auto py-20">
      <div class="title-subtitle flex-col mb-16">
        <h1 class="font-bold text-4xl uppercase">trending</h1>
        <h2 class="font-semibold text-lg capitalize">smartphone yang paling banyak dicari</h2>
      </div>
      <div class="content-trending my-5">
        <swiper :slides-per-view="4" :space-between="20">
            <swiper-slide v-for="trending in trendings" v-bind:key="trending.id">
              <CardSmartphone :image_url="trending.image_url" :color="trending.color"  :brand="trending.brand" :model="trending.model" :score="trending.score" :rating="trending.rating" :price="trending.original_price" :id="trending.id" :memory="trending.memory" :storage="trending.storage"/>
            </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="container section-testimoni mx-auto py-20">
      <div class="title-subtitle flex-col mb-16">
        <h1 class="font-bold text-4xl uppercase">testimoni</h1>
        <h2 class="font-semibold text-lg capitalize">pendapat mereka mengenai find ur smartphone</h2>
      </div>
      <div class="content-testimoni my-5">
        <swiper :slides-per-view="4" :space-between="5">
          <swiper-slide v-for="testimoni in testimonis" v-bind:key="testimoni.id">
            <CardTestimoni :guest_name="testimoni.guest_name" :testimoni="testimoni.testimoni"/>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="container section-form-testimoni mx-auto py-20">
      <div class="title-subtitle flex-col mb-16">
        <h1 class="font-bold text-4xl uppercase">bagikan pengalamanmu</h1>
        <h2 class="font-semibold text-lg capitalize">punya pengalaman menarik dalam menggunakan find ur smartphone? tulis pengalaman kalian dibawah ini</h2>
      </div>
      <div class="content--form-testimoni my-5">
        <form class="space-y-5 text-left px-32" @submit="postTestimoni">
          <div>
            <label class="block mb-1 font-bold text-gray-500">Guest Name</label>
            <input type="text" name="guest_name" v-model="TestimoniData.guest_name" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
          </div>

          <div>
            <label class="block mb-1 font-bold text-gray-500">Testimoni</label>
            <textarea name="testimoni" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" v-model="TestimoniData.testimoni"  cols="30" rows="10"></textarea>
            
          </div>
          <button
            class="block w-full bg-gray-600 hover:bg-gray-300 p-4 rounded text-white hover:text-gray-600 transition duration-300" type="submit">Submit</button>
        </form>
      </div>
    </div>
    <div class="section-footer pt-20">
      <FooterComponents />
    </div>
  </div>
</template>
<script>
  import NavbarComponents from "../components/NavbarComponents.vue"
  import FooterComponents from "../components/FooterComponents.vue"
  import CardSmartphone from "../components/CardSmartphone.vue"
  import CardTestimoni from "../components/CardTestimoni.vue"
  import axios from 'axios'
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';
  import 'swiper/css';

  export default {

    name: 'HomeView',
    components: {
      NavbarComponents,
      Swiper,
      SwiperSlide,
      CardSmartphone,
      CardTestimoni,
      FooterComponents
    },
    data() {
      return {
        TestimoniData:{
          guest_name:null,
          testimoni: null,
        },
        recommendations:[],
        testimonis:[],
        trendings:[],
        token: '1|U2zYScjXJz8qlB0p5anVhhLQRPMYEfeWFqSo8s5r',
      }
    },
     mounted() {
      axios.get('https://sleepy-sea-83124.herokuapp.com/api/smartphones/recommendation', {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      }).then(res => (this.recommendations = res.data.data)).catch(err => console.error(err));
       axios.get('https://sleepy-sea-83124.herokuapp.com/api/smartphones/trending', {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      }).then(res => (this.trendings = res.data.data)).catch(err => console.error(err));
       axios.get('https://sleepy-sea-83124.herokuapp.com/api/testimoni', {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      }).then(res => (this.testimonis = res.data.data.data)).catch(err => console.error(err));
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
    methods:{
      postTestimoni(e){
        axios
          .post('https://sleepy-sea-83124.herokuapp.com/api/testimoni', this.TestimoniData, {
            headers: {
              'accept': 'application/json',
              'Authorization': `Bearer ${this.token}`
            }
          })
          .then(() => alert('Testimoni Berhasil Ditambahkan'))
          .catch(err => alert(err));
        e.preventDefault();
        axios.get('https://sleepy-sea-83124.herokuapp.com/api/testimoni', {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      }).then(res => (this.testimonis = res.data.data.data)).catch(err => console.error(err));
      }
    },
    created(){
      document.title = "Find Ur Smartphone"
    }
  }
</script>
<style lang="">

</style>