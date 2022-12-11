<script setup>
import { IconArrowRight, IconArrowDown, IconArrowUp } from "~/assets/icons";
const [value, toggle] = useToggle();
const [value1, toggle1] = useToggle();
</script>
<template>
  <footer class="w-full divider px-8 md:px-20 lg:px-40">
    <div
      class="pt-20 flex flex-col md:flex-row gap-8 pb-10 justify-start divide-y divide-neutrals-300 md:divide-y-0"
    >
      <div class="pt-8 md:pt-0">
        <img src="/images/logo-dark.png" alt="" class="w-[126px] h-8" />
        <h2 class="w-48 lg:w-64 mt-8 md:text-body-2 lg:text-body-1">
          The New Creative Economy.
        </h2>
      </div>
      <div class="md:w-40 pt-8 md:pt-0">
        <div class="flex justify-between">
          <h5 class="text-hairline-2 md:text-body-2-bold">Stack</h5>
          <button class="md:hidden" @click="toggle()">
            <IconArrowUp v-if="value" class="text-neutrals-600" />
            <IconArrowDown v-else class="text-neutrals-600" />
          </button>
        </div>
        <ul
          class="mt-10 space-y-6"
          :class="[
            value ? 'opacity-0 h-0 md:h-auto md:opacity-100' : 'opacity-100',
          ]"
        >
          <a href="" class="text-button-2 text-neutrals-500 block">Discover</a>
          <a href="" class="text-button-2 text-neutrals-500 block"
            >Connect wallet</a
          >
          <a href="" class="text-button-2 text-neutrals-500 block"
            >Create item</a
          >
        </ul>
      </div>
      <div class="md:w-40 pt-8 md:pt-0 overflow-hidden h-auto">
        <div class="flex justify-between">
          <h5 class="text-hairline-2 md:text-body-2-bold">Info</h5>
          <button class="md:hidden" @click="toggle1()">
            <IconArrowUp v-if="value1" class="text-neutrals-600" />
            <IconArrowDown v-else class="text-neutrals-600" />
          </button>
        </div>
        <ul
          class="mt-10 space-y-6 transition-opacity duration-200"
          :class="[value1 ? 'opacity-0 h-0 md:opacity-100' : 'opacity-100']"
        >
          <a href="" class="text-button-2 text-neutrals-500 block">Download</a>
          <a href="" class="text-button-2 text-neutrals-500 block">Demos</a>
          <a href="" class="text-button-2 text-neutrals-500 block">Support</a>
        </ul>
      </div>
      <div class="pt-8 md:pt-0">
        <h5 class="text-hairline-2 md:text-body-2-bold">Join Newsletter</h5>
        <div class="mt-10">
          <p class="text-caption">
            Subscribe our newsletter to get more free design course and resource
          </p>
          <div class="mt-6 text-caption text-neutrals-400 relative w-full h-12">
            <input
              type="email"
              name=""
              id=""
              class="border-2 border-neutrals-300 focus:border-primary-100 focus:outline-none absolute inset-0 rounded-full pl-4 pr-10 text-primary-100 invalid:border-primary-300 focus:invalid:border-primary-300 invalid:text-primary-300"
              placeholder="Enter your Email"
            />
            <button
              class="bg-primary-100 h-8 w-8 absolute flex justify-center items-center inset-y-2 right-2 rounded-full"
            >
              <IconArrowRight class="text-neutrals-100" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="py-8 flex justify-center md:justify-between items-center text-caption-2 divider"
    >
      <p class="flex-grow-0">Copyright © 2021 UI8 LLC. All rights reserved</p>
      <div class="gap-4 hidden md:flex text-neutrals-700">
        <p>We use cookies for better service.</p>
        <button class="text-primary-100 font-semibold">Accept</button>
      </div>
    </div>
  </footer>
</template>
