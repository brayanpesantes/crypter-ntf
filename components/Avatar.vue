<script setup>
defineProps(["name", "src"]);
const urlNotAvatar = "/images/content/avatar-big.jpg";
</script>

<template>
  <img
    :src="src ? src : urlNotAvatar"
    :alt="name ? name : 'avatar'"
    class="rounded-full"
  />
</template>
