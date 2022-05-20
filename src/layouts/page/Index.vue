<template>
  <v-app app>
    <PageAppbar />
    <PageView />
  </v-app>
</template>

<script>
import PageAppbar from './Appbar.vue';
import PageView from './View.vue';
export default {
  name: 'PageLayout',
  components: {
    PageAppbar,
    PageView,
  },
};
</script>

<style></style>
