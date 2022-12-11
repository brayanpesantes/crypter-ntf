<script setup>
import { IconSearch, IconBurger } from "~/assets/icons";
</script>
<template>
  <header class="border border-neutrals-300 px-8 md:px-20 lg:px-40 h-20">
    <div class="flex items-center justify-between md:p-5 h-full">
      <div class="flex gap-8">
        <div class="">
          <img src="/images/logo-dark.png" alt="logo-dark.png" class="h-8" />
        </div>
        <div class="w-[1px] bg-neutrals-300"></div>
        <ul class="flex gap-8 items-center">
          <li class="text-button-2 text-neutrals-700">Discover</li>
          <li class="text-button-2">How it work</li>
        </ul>
      </div>
      <div class="flex items-center gap-6">
        <div class="relative text-caption-2 w-64 h-10">
          <input
            type="search"
            class="border-2 border-neutrals-300 bg-neutrals-50 pl-4 pr-8 rounded-lg outline-none absolute inset-0"
            placeholder="Search"
          />
          <span class="absolute right-3 inset-y-[10px]">
            <IconSearch />
          </span>
        </div>
        <Notification />
        <div class="space-x-3">
          <button class="btn btn-primary">Upload</button>
          <button class="btn btn-outline-secondary">Connect Wallet</button>
        </div>
      </div>
    </div>
  </header>
</template>
