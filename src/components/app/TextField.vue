<template>
  <label class="mt-1">
    {{ label }}
    <v-text-field v-bind="$attrs" v-on="$listeners" />
    <!-- <v-text-field :value="value" @input="(value) => $emit('input', value)" /> -->
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    // value: {
    //   type: String,
    //   default: null,
    // },
  },
  inheritAttrs: true,
};
</script>

<style></style>
