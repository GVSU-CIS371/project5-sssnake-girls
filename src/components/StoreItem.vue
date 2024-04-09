<template>
    <v-card>
        <v-card-title>
            {{ product.data.name }}
        </v-card-title>
        <v-card-subtitle>
            {{product.data.rating}} {{product.data.price}} {{product.data.stock}}
            <!--might implement using icons, though preferably not the kind the prof used and definitely avoiding changing the rating-->
            <!--also if this is too crowded, one or two things can be changed to a card action-->
        </v-card-subtitle>
        <div class="image-container">
        <v-img :src="product.data.image" alt="Product Image" class="image" />
        </div>
        <v-card-text>
        {{product.data.description}}
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { /*ref,*/ defineProps } from 'vue';
//import { isImportAttributeName } from 'typescript';
import { ProductDoc } from '../types/product';
defineProps<{
    product: ProductDoc;
}>();
</script>

<style scoped>
.image-container {
  min-height: 300px;
  max-height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  max-width: 200px;
  justify-content: center;
  align-items: center;
}
</style>

