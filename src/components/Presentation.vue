<script setup lang="ts">
import data from '../locales/data.json';
</script>

<template>
  <section class="flex flex-row gap-x-8">
    <img src="../assets/portrait.jpg" alt="Portrait of Juan Burillo" class="w-1/6 h-1/6 rounded-full">

    <div class="w-5/6">
        <div class="text-sm text-gray-600">
          <p>{{ data.contact.location }}</p>
          <p>{{ data.contact.phone }} &middot; {{ data.contact.email }}</p>
        </div>

        <div class="mt-6">
          <h1 class="font-bold text-3xl text-gray-800">{{ data.name }}</h1>
          <h2 class="font-medium text-gray-700">{{ data.title }}</h2>
          <p class="mt-2 text-lg text-justify text-gray-700">{{ data.description }}</p>
        </div>
    </div>
  </section>
</template>
