<script setup>
const listItems = [
  {
    title: "ETH never die",
    image: "/images/content/card-pic-5.jpg",
    avatar: "/images/content/avatar-1.jpg",
    price: 12,
    mount: "0.27 ETH",
  },
  {
    title: "Future coming soon",
    image: "/images/content/card-pic-2.jpg",
    avatar: "/images/content/avatar-3.jpg",
    price: 3,
    mount: "0.27 ETH",
  },
  {
    title: "Elon Musk silver coin 3d print",
    image: "/images/content/card-pic-3.jpg",
    avatar: "/images/content/avatar-4.jpg",
    price: 4,
    mount: "0.27 ETH",
  },
];
</script>
<template>
  <div class="md:flex flex-col gap-8 md:flex-shrink-0 lg:w-[351px]">
    <Item
      v-for="item in listItems"
      :image="item.image"
      :title="item.title"
      :avatar="item.avatar"
      :price="item.price"
      :mount="item.mount"
    />
  </div>
</template>
