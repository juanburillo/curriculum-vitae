<script setup lang="ts">
import SectionLayout from '../layouts/SectionLayout.vue';
</script>

<template>
  <SectionLayout :title="$t('experience.heading')">
    <div>
      <h1 class="font-medium text-xl text-gray-800">
        {{ $t('experience.title') }}
      </h1>
      <h2 class="text-lg text-gray-700">
        {{ $t('experience.employer') }}
      </h2>
      <small class="text-sm text-gray-600">
        {{ $t('experience.startDate') }} - {{ $t('experience.endDate') }} &middot; Madrid
      </small>
      <p class="mt-1 text-justify text-gray-700">
        {{ $t('experience.description') }}
      </p>
    </div>
  </SectionLayout>
</template>
