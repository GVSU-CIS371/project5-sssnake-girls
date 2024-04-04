<template>
    <v-card>
        <v-card-title>
            {{item.name}}
        </v-card-title>
        <v-card-subtitle>
            {{item.rating}} {{item.price}} {{item.stock}}
            <<!--might implement using icons, though preferably not the kind the prof used and definitely avoiding changing the rating-->
            <<!--also if this is too crowded, one or two things can be changed to a card action-->
        </v-card-subtitle>
        <v-card-text>
        {{item.description}}
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
// your answer
</script>
