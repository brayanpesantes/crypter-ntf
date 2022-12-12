<script setup>
defineProps(["image", "title", "avatar", "mount", "price"]);
</script>
<template>
  <article class="flex w-[351px] items-center gap-6">
    <img
      :src="image"
      :alt="title"
      class="block h-[148px] w-40 rounded-xl object-cover"
    />
    <div class="flex-1">
      <h3 class="text-body-2-bold break-all">{{ title }}</h3>
      <div class="mt-2 flex items-center gap-[11px]">
        <Avatar class="h-6 w-6" :src="avatar" />
        <Badge :text="mount" />
        <p class="text-caption text-neutrals-400">1 of {{ price }}</p>
      </div>
      <button class="btn-sm btn-outline-secondary mt-4">Place a bid</button>
    </div>
  </article>
</template>
