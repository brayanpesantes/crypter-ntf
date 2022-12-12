<template>
  <section
    class="bg-neutrals-100 px-8 py-16 md:px-20 md:pt-20 md:pb-32 lg:px-40"
  >
    <div class="flex w-full flex-wrap gap-8">
      <Featured class="w-full md:w-[414px] lg:w-[448px]" />
      <ItemList class="hidden" />
      <div class="hidden h-full w-[1px] bg-neutrals-300 lg:block"></div>
      <ListCreators />
    </div>
  </section>
</template>
