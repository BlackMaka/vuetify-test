<template>
  <!-- <v-container fluid> </v-container> -->
  <v-container>
    <v-card class="mt-4">
      {{ text }}
      <v-card-text>
        <TextField label="나이" v-model="text" dense outlined />
        <TextField label="이름" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import TextField from '@/components/app/TextField';
export default {
  components: {
    TextField,
  },
  data() {
    return {
      text: null,
    };
  },
};
</script>

<style></style>
