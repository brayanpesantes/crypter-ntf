<script setup>
defineProps(["text"]);
</script>
<template>
  <span
    class="border-box block px-[6px] pt-[6px] pb-[4px] text-hairline-2 text-primary-400 border-2 border-primary-400 rounded-[4px]"
  >
    {{ text }}
  </span>
</template>
