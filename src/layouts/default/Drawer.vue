<template>
  <v-navigation-drawer
    app
    v-bind="$attrs"
    dark
    :src="require('@/assets/sidebar.jpg')">
    <!-- <template #img="props"> -->
    <template v-slot:img="props">
      <v-img :gradient="gradient" v-bind="props"> </v-img>
    </template>

    <DefaultDrawerHeader></DefaultDrawerHeader>
    <v-divider></v-divider>
    <DefaultList :items="items"></DefaultList>
  </v-navigation-drawer>
</template>

<script>
import DefaultDrawerHeader from './DrawerHeader.vue';
import DefaultList from './List.vue';
export default {
  name: 'Default Drawer',
  components: {
    DefaultDrawerHeader,
    DefaultList,
  },
  data() {
    return {
      gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
        {
          title: 'Page',
          icon: 'mdi-view-dashboard',
          items: [
            {
              title: 'ProductList',
              icon: 'mdi-view-dashboard',
              to: '/page/product-list',
            },
            {
              title: 'Authentication',
              icon: 'mdi-view-dashboard',
              items: [
                { title: 'SignIn', icon: '', to: '/authentication/sign-in' },
                { title: 'SignUp', icon: '', to: '/authentication/sign-up' },
              ],
            },
          ],
        },
        { title: 'GridSystem', icon: 'mdi-image', to: '/grid-system' },
        { title: 'Grid List Page', icon: '', to: '/grid-list-page' },
        { title: 'Breakpoints', icon: 'mdi-list-page', to: '/breakpoints' },
        { title: 'Typography', icon: 'mdi-list-page', to: '/typography' },
        { title: 'Color', icon: 'mdi-list-page', to: '/color' },
        { title: 'Display', icon: 'mdi-list-page', to: '/display' },
        { title: 'Table', icon: 'mdi-list-page', to: '/table' },
        { title: 'Form', icon: 'mdi-list-page', to: '/form' },
        { title: 'Button', icon: 'mdi-list-page', to: '/button' },
        { title: 'Icon', icon: 'mdi-list-page', to: '/icon' },
      ],
      right: null,
    };
  },
};
</script>

<style></style>
