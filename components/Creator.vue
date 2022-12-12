<script setup>
defineProps(["avatar", "name", "money", "post"]);
</script>
<template>
  <article
    class="flex w-[224px] shrink-0 items-center gap-4 px-1 pt-6 md:pb-[25px]"
  >
    <div class="relative block h-14 w-14">
      <Avatar :src="avatar" class="z-50" />
      <span
        class="text-caption-2-bold absolute -top-1 -left-1 box-content flex h-6 w-6 items-center justify-center rounded-[64px] bg-neutrals-800 text-neutrals-100 ring-2 ring-inset ring-neutrals-200"
      >
        {{ post }}
      </span>
    </div>
    <div class="">
      <p class="text-caption-bold">{{ name }}</p>
      <p class="text-caption-2-bold mt-[2px] text-neutrals-600">
        {{ money }}<span class="text-caption-2 ml-[2px]">ETH</span>
      </p>
    </div>
  </article>
</template>
