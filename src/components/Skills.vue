<script setup lang="ts">
import SectionLayout from '../layouts/SectionLayout.vue';

const skills: Array<String> = [
  "☕ Java",
  "🍃 Spring Boot",
  "🟨 JavaScript",
  "📐 Angular",
  "❇️ Vue.js",
  "🐬 MySQL",
  "🐘 PHP",
  "💨 Tailwind CSS"
];
</script>

<template>
  <SectionLayout :title="$t('skills.heading')">
    <div class="grid grid-cols-4 gap-y-2">
      <p v-for="skill in skills" class="font-medium text-gray-700 text-sm">{{ skill }}</p>
    </div>
  </SectionLayout>
</template>
