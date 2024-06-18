<script setup lang="ts">
</script>

<template>
  <section class="flex gap-x-8">
    <img src="../assets/portrait.png" alt="Portrait of Juan Burillo" class="w-1/6 h-1/6 rounded-full shadow-sm">

    <div class="w-5/6">
        <div class="text-sm text-gray-600">
          <p>{{ $t('presentation.location') }}</p>
          <p>+34 648 09 24 23 &middot; juanburillodev@gmail.com</p>
          <a href="https://www.linkedin.com/in/juan-burillo/" target="_blank" class="underline hover:opacity-80 transition-all duration-150 ease-in-out">LinkedIn</a>
          &middot;
          <a href="https://github.com/juanburillo/" target="_blank" class="underline hover:opacity-80 transition-all duration-150 ease-in-out">GitHub</a>
        </div>

        <div class="mt-4">
          <h1 class="font-bold text-3xl text-gray-800">Juan Burillo Retuerto</h1>
          <h2 class="font-medium text-gray-700">
            {{ $t('presentation.title') }}
          </h2>
          <p class="mt-2 text-base text-justify text-gray-700">
            {{ $t('presentation.description') }}
          </p>
        </div>
    </div>
  </section>
</template>
