<script setup lang="ts">
import SectionLayout from '../layouts/SectionLayout.vue';
</script>

<template>
  <SectionLayout :title="$t('courses.heading')">
    <h1 class="font-medium text-xl text-gray-800">
      {{ $t('courses.title') }}
    </h1>
    <h2 class="text-lg text-gray-700">
      {{ $t('courses.institution') }}
    </h2>
    <small class="text-sm text-gray-600">
      {{ $t('courses.issueDate') }}
    </small>
  </SectionLayout>
</template>
