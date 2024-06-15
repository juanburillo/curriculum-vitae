<script setup lang="ts">
import data from '../locales/data.json';
</script>

<template>
  <div>
    <h2 class="text-gray-600">Experience</h2>

    <div v-for="job in data.experience" class="mt-2">
      <h1 class="font-medium text-xl">{{ job.title }} at {{ job.employer }}</h1>
      <h2 class="text-gray-500 text-sm">{{ job.startDate }} - {{ job.endDate }} &middot; {{ job.city }}</h2>
      <p class="mt-1 text-justify">{{ job.description }}</p>
    </div>
  </div>
</template>
