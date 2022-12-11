<script setup lang="ts">
import IconFag from "~/assets/icons/cup.svg";
import IconPlay from "~/assets/icons/play.svg";
const data = ref<boolean>(true);
</script>
<template>
  <div>
    <h1>hola mundo</h1>
    <IconFag class="h-8 w-8 text-primary-200" />
    <IconPlay class="h-8 w-8 text-primary-300 bg-neutrals-700 rounded-md" />
    <Player />
    <Switch v-model="data" />
    {{ data }}
  </div>
</template>
