<template>
  <v-container>
    <v-row>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"  
        sm="6"    
        md="4"    
        lg="3"    
      >
        <StoreItem :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import { computed } from "vue";
  import { useItemStore } from "../stores/ProductStore";
  import { onBeforeMount } from "vue";

  const myStore = useItemStore();
  onBeforeMount(() => {
    myStore.filterByCategory("Groceries");
  });

  const products = computed(() => myStore.products || []);

</script>
./productStore