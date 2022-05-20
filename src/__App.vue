<template>
  <v-app>
    <v-app-bar v-if="$vuetify.breakpoint.xsOnly" app></v-app-bar>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-main>
      <v-container> 컨텐츠영역 </v-container>
    </v-main>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {};
</script>

<style></style>
