<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="flex gap-x-8">
    <h2 class="w-1/6 text-gray-600">{{ title }}</h2>

    <div class="w-5/6">
      <slot />
    </div>
  </section>
</template>
