<script setup>
import { IconBurger, IconClose, IconSearch } from "~/assets/icons";

const isAuth = ref(false);
const [isOpen, toggle] = useToggle();
</script>
<template>
  <header class="px-8 pt-12 pb-6 bg-neutrals-100 relative">
    <div class="flex justify-between items-center">
      <img src="/images/logo-dark.png" alt="logo-dark.png" class="h-8 block" />
      <div class="flex items-center gap-5">
        <Notification v-if="isAuth" />
        <Avatar class="h-8 w-8" v-if="isAuth" />
        <button class="block" @click="toggle()">
          <IconClose v-if="isOpen" />
          <IconBurger v-else />
        </button>
      </div>
    </div>
    <Transition>
      <div
        v-if="isOpen"
        class="height w-full bg-neutrals-100 absolute left-0 top-[104px] z-10"
      >
        <ul class="mt-16">
          <li class="text-body-1 text-neutrals-400 py-4 px-8">Discover</li>
          <li class="text-body-1 py-4 px-8 border-l-2 border-primary-100">
            How it work
          </li>
        </ul>
        <div class="flex px-8 justify-between items-center h-80 pb-11">
          <button class="btn btn-primary">Connect wallet</button>
          <button><IconSearch /></button>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.height {
  height: calc(100vh - 104px);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
