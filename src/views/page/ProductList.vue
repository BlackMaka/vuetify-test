<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="i in 12" :key="i">
        <ProductItem /> </v-col
    ></v-row>
  </v-container>
</template>

<script>
import ProductItem from '@/components/product/ProductItem.vue';
export default {
  components: {
    ProductItem,
  },
};
</script>

<style></style>
