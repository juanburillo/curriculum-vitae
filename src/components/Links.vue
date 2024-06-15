<script setup lang="ts">
import data from '../locales/data.json';
</script>

<template>
  <section class="flex gap-x-8">
    <h2 class="w-1/6 text-gray-600">Links</h2>

    <div class="w-5/6 flex gap-x-52">
      <a v-for="social in data.contact.socials" class="font-medium underline" :href="social.url" target="_blank">
        {{ social.site }}
      </a>
    </div>
  </section>
</template>
