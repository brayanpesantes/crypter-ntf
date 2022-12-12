<script setup>
import { IconArrowRight } from "~/assets/icons";
const listCreators = [
  {
    avatar: "/images/content/avatar-1.jpg",
    name: "Payton Harris",
    money: "2,456",
    post: 6,
  },
  {
    avatar: "/images/content/avatar-2.jpg",
    name: "Anita Bins",
    money: "2,456",
    post: 2,
  },
  {
    avatar: "/images/content/avatar-3.jpg",
    name: "Joana wuckert",
    money: "2,456",
    post: 3,
  },
  {
    avatar: "/images/content/avatar-4.jpg",
    name: "Lorena Lender",
    money: "2,456",
    post: 4,
  },
];
</script>
<template>
  <div class="overflow-hidden">
    <h4 class="text-caption-2-bold">Latest upload from creators 🔥</h4>
    <div
      class="flex overflow-x-auto md:flex-row md:justify-between lg:flex-col lg:divide-y lg:divide-neutrals-400"
    >
      <Creator
        v-for="creator in listCreators"
        :avatar="creator.avatar"
        :name="creator.name"
        :post="creator.post"
        :money="creator.money"
      />
    </div>
    <button class="btn btn-outline-secondary hidden items-center lg:flex">
      Discover more <IconArrowRight class="ml-3" />
    </button>
  </div>
</template>
