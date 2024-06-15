<script setup lang="ts">
import data from '../locales/data.json';
</script>

<template>
  <div>
    <h2 class="text-gray-600">Education</h2>

    <div v-for="degree in data.education" class="mt-2">
      <h1 class="font-medium text-xl">{{ degree.title }} at {{ degree.school }}</h1>
      <h2 class="text-gray-500 text-sm">{{ degree.startDate }} - {{ degree.endDate }} &middot; {{ degree.city }}</h2>
      <p class="mt-1 text-justify">{{ degree.description }}</p>
    </div>
  </div>
</template>
