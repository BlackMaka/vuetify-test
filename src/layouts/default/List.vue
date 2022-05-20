<template>
  <v-list dense nav expand>
    <template v-for="item in items">
      <ListGroupItem v-if="item.items" :item="item" :key="item.title" />
      <ListItem v-else :item="item" :key="item.title" />
    </template>
  </v-list>
</template>

<script>
import ListItem from './ListItem.vue';
import ListGroupItem from './ListGroupItem.vue';
export default {
  name: 'DefaultList',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ListItem,
    ListGroupItem,
  },
};
</script>
