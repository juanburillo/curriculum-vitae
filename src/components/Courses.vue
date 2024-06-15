<script setup lang="ts">
import data from '../locales/data.json';
</script>

<template>
  <div>
    <h2 class="text-gray-600">Courses</h2>

    <div v-for="course in data.courses" class="mt-2">
      <h1 class="font-medium text-xl">{{ course.title }} &middot; {{ course.institution }}</h1>
      <h2 v-if="course.expiryDate" class="text-gray-500 text-sm">{{ course.issueDate }} - {{ course.expiryDate }}</h2>
      <h2 v-else class="text-gray-500 text-sm">{{ course.issueDate }}</h2>
    </div>
  </div>
</template>
