<template>
  <v-app>
    <DefaultAppbar @drawer="drawer = !drawer"></DefaultAppbar>
    <DefaultDrawer v-model="drawer"></DefaultDrawer>
    <DefaultView />
  </v-app>
</template>

<script>
import DefaultAppbar from './AppBar.vue';
import DefaultDrawer from './Drawer.vue';
import DefaultView from './View.vue';
export default {
  name: 'DefaultLayout',
  components: {
    DefaultAppbar,
    DefaultDrawer,
    DefaultView,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>

<style></style>
