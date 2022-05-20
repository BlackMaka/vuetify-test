<template>
  <v-list-group :prepend-icon="item.icon">
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </template>

    <template v-for="child in item.items">
      <DefaultListGroupItem
        v-if="child.items"
        :item="child"
        :key="child.title" />
      <ListItem v-else :item="child" :key="child.title" />
    </template>
  </v-list-group>
</template>

<script>
import ListItem from './ListItem.vue';
//import DefaultListGroupItem from './ListGroupItem.vue';
export default {
  name: 'DefaultListGroupItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    ListItem,
    //DefaultListGroupItem,
  },
};
</script>
