<script setup lang="ts">
import data from '../locales/data.json';
</script>

<template>
  <section class="flex gap-x-8">
    <h2 class="w-1/6 text-gray-600">Education</h2>

    <div class="w-5/6">
      <div v-for="degree in data.education">
        <h1 class="font-medium text-xl">{{ degree.title }} at {{ degree.school }}</h1>
        <h2 class="text-gray-500 text-sm">{{ degree.startDate }} - {{ degree.endDate }} &middot; {{ degree.city }}</h2>
        <p class="mt-1 text-justify">{{ degree.description }}</p>
      </div>
    </div>
  </section>
</template>
