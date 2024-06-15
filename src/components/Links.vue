<script setup lang="ts">
import data from '../locales/data.json';
</script>

<template>
  <div>
    <h2 class="text-gray-600">Links</h2>

    <div class="mt-2 grid grid-cols-2">
      <a v-for="social in data.contact.socials" class="font-medium underline" :href="social.url" target="_blank">
        {{ social.site }}
      </a>
    </div>
  </div>
</template>
