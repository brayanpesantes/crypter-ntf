<script setup>
import { IconStop, IconArrowLeft, IconArrowRight } from "~/assets/icons";
</script>
<template>
  <section class="px-8 md:px-20 lg:px-40 py-[136px]">
    <div class="flex flex-col md:flex-row gap-8 lg:gap-32">
      <div class="bg-primary-300 flex-1 h-[478px] md:h-[800px] rounded-2xl">
        <img
          src="/images/content/video-preview@2x.jpg"
          alt=""
          class="rounded-2xl h-full w-full object-cover object-center"
        />
      </div>
      <div class="w-full md:w-[304px] lg:w-[352px] space-y-10">
        <article class="">
          <h2 class="text-headline-1">Marco carrillo®</h2>
          <div class="mt-5 flex gap-8">
            <div class="flex gap-2">
              <Avatar class="w-10 h-10" />
              <div class="w-full">
                <p class="text-caption-2">Creator</p>
                <p class="text-caption-bold block">Enrico Cole</p>
              </div>
            </div>
            <div class="flex gap-2">
              <span
                class="w-10 h-10 rounded-full bg-primary-400 flex items-center justify-center"
              >
                <IconStop />
              </span>
              <div>
                <p class="text-caption-2 block">Instant price</p>
                <p class="text-caption-bold block">3.5 ETH</p>
              </div>
            </div>
          </div>
        </article>
        <article
          class="border-2 border-neutrals-300 md:h-[296px] rounded-3xl box-shadow"
        >
          <div class="text-center mt-8">
            <p class="text-body-2-bold">Current Bid</p>
            <h4 class="text-headline-2">1.00 ETH</h4>
            <p class="text-body-1 text-neutrals-400">$3,618.36</p>
          </div>
          <div class="mt-6 w-[231px] mx-auto">
            <p class="text-body-2-bold text-center">Auction ending in</p>
            <div class="grid grid-cols-3 text-center gap-[19.5px] mt-2">
              <div>
                <p class="text-headline-4"><time>19</time></p>
                <span class="text-body-2-bold text-neutrals-400">Hrs</span>
              </div>
              <div>
                <p class="text-headline-4"><time>24</time></p>
                <span class="text-body-2-bold text-neutrals-400">mins</span>
              </div>
              <div>
                <p class="text-headline-4"><time>19</time></p>
                <span class="text-body-2-bold text-neutrals-400">secs</span>
              </div>
            </div>
          </div>
        </article>
        <div class="space-y-2">
          <button class="btn btn-primary w-full">Place a bid</button>
          <button class="btn btn-outline-secondary w-full">View item</button>
        </div>
        <div class="flex gap-2">
          <button class="h-10 w-10 flex items-center justify-center">
            <IconArrowLeft class="text-neutrals-400" />
          </button>
          <button
            class="h-10 w-10 rounded-full border border-neutrals-400 flex items-center justify-center"
          >
            <IconArrowRight class="text-neutrals-400 block" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.box-shadow {
  box-shadow: 0px 64px 64px -48px rgba(31, 47, 70, 0.12);
}
</style>
