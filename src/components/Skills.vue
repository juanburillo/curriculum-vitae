<script setup lang="ts">
import data from '../locales/data.json';
</script>

<template>
  <div>
    <h2 class="text-gray-600">Skills</h2>

    <div class="mt-2 grid grid-cols-4 gap-y-2">
      <p v-for="skill in data.skills" class="font-medium">{{ skill }}</p>
    </div>
  </div>
</template>
