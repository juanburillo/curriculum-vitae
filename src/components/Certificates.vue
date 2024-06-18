<script setup lang="ts">
import SectionLayout from '../layouts/SectionLayout.vue';
</script>

<template>
  <SectionLayout :title="$t('certificates.heading')">
    <h1 class="font-medium text-xl text-gray-800">
      {{ $t('certificates.title') }}
    </h1>
    <h2 class="text-lg text-gray-700">
      {{ $t('certificates.institution') }}
    </h2>
    <small class="text-sm text-gray-600">
      {{ $t('certificates.issueDate') }}
    </small>
  </SectionLayout>
</template>
