<script setup lang="ts">
import data from '../locales/data.json';
</script>

<template>
  <section class="flex gap-x-8">
    <h2 class="w-1/6 text-gray-600">Courses</h2>

    <div class="w-5/6">
      <div v-for="course in data.courses">
        <h1 class="font-medium text-xl">{{ course.title }}</h1>
        <h2 class="text-lg">{{ course.institution }}</h2>
        <h3 class="text-gray-500 text-sm">{{ course.issueDate }} <span v-if="course.expiryDate"> - {{ course.expiryDate }}</span></h3>
      </div>
    </div>
  </section>
</template>
