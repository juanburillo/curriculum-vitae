<script setup lang="ts">
import SectionLayout from '../layouts/SectionLayout.vue';
</script>

<template>
  <SectionLayout :title="$t('education.heading')">
    <div>
      <h1 class="font-medium text-xl text-gray-800">
        {{ $t('education.title') }}
      </h1>
      <h2 class="text-lg text-gray-700">
        {{ $t('education.school') }}
      </h2>
      <small class="text-sm text-gray-600">
        {{ $t('education.startDate') }} - {{ $t('education.endDate') }} &middot; Madrid
      </small>
      <p class="mt-1 text-justify text-gray-700">
        {{ $t('education.description') }}
      </p>
    </div>
  </SectionLayout>
</template>
