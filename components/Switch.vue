<script setup>
defineProps(["modelValue", "id"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <label class="inline-block relative select-none cursor-pointer text-[0]">
    <input
      type="checkbox"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.checked)"
      class="absolute top-0 left-0 opacity-0 input"
    />
    <span
      class="relative inline-block transition-all duration-200 rounded-full inner"
    >
      <span
        class="relative block w-12 h-6 bg-neutrals-300 rounded-xl transition-all duration-200 before:content[' '] before:absolute before:left-1 before:translate-y-1/4 before:h-4 before:w-4 before:rounded-[50%] before:bg-primary-100 transition-all duration-200 box"
      ></span>
    </span>
  </label>
</template>
<style scoped>
.input:checked + .inner .box {
  @apply bg-primary-100;
}
.input:checked + .inner .box::before {
  transform: translate(24px, 25%);
  @apply bg-neutrals-300;
}
</style>
