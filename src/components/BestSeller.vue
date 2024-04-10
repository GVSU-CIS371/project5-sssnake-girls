<template>

</template>

<script lang="ts" setup>
  import { computed } from "vue";
  import { useItemStore } from "../stores/ProductStore";
  import { onBeforeMount } from "vue";

  const myStore = useItemStore();
  onBeforeMount(() => {
    myStore.filterByRating(4.5);
  });

  const products = computed(() => myStore.products || []);

</script>
./productStore