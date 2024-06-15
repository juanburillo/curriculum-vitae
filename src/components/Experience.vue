<script setup lang="ts">
import data from '../locales/data.json';
</script>

<template>
  <section class="flex gap-x-8">
    <h2 class="w-1/6 text-gray-600">Experience</h2>

    <div class="w-5/6">
      <div v-for="job in data.experience">
        <h1 class="font-medium text-xl">{{ job.title }} at {{ job.employer }}</h1>
        <h2 class="text-gray-500 text-sm">{{ job.startDate }} - {{ job.endDate }} &middot; {{ job.city }}</h2>
        <p class="mt-1 text-justify">{{ job.description }}</p>
      </div>
    </div>
  </section>
</template>
