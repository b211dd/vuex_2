<template>
  <div class="home">
    <h1>This is an home page</h1>

   {{ getFirstProduct }}


    <!-- <h2>Your Name is {{ this.$store.state.name }}</h2>
    <h3>Your Age is {{ this.$store.state.age }}</h3>
    <input type="text" v-model="this.$store.state.name"/>

    <h2>User Name Is: {{ this.$store.getters.getNameWithTitle }}</h2>
    

    <button @click="this.$store.commit('changeTitle')">changeTitle</button> -->


    <!-- <button @click="this.$store.dispatch('doGetProducts')">Get Products</button> -->
<ul>
    <li v-for="product in ProductsModule.products" 
    :key="product.id">
    {{ product.title }}
    
  </li>
</ul>
<button @click="getProductsFUnc"> get   Products</button>

  
  </div>
</template>

<script>
import getProducts from '@/stores/products/getProducts';
import { mapState ,mapActions,mapMutations,mapGetters } from 'vuex';

export default (await import ('vue')).defineComponent({
  name: "HomeView",
  computed: {
    ...mapState(["ProductsModule"]),
    ...mapGetters(["getFirstProduct"]),
  },
  methods: {
    ...mapMutations(["getProducts"]),
    ...mapActions(["doGetProducts"]),
    async getProductsFUnc() {
      await this.doGetProducts();
      console.log("Products from homepage", this.ProductsModule.products);
      
    },
  },
});

</script>