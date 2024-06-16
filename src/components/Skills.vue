<script setup lang="ts">
const skills: Array<String> = [
  "Java ☕",
  "Spring Boot 🍃",
  "JavaScript 🟨",
  "Angular 📐",
  "Vue.js ❇️",
  "MySQL 🐬",
  "PHP 🐘",
  "Tailwind CSS 💨"
];
</script>

<template>
  <section class="flex gap-x-8">
    <h2 class="w-1/6 text-gray-600">Skills</h2>

    <div class="w-5/6 grid grid-cols-4 gap-y-2">
      <p v-for="skill in skills" class="font-medium">{{ skill }}</p>
    </div>
  </section>
</template>
