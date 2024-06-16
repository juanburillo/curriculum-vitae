<script setup lang="ts">
import SectionLayout from '../layouts/SectionLayout.vue';
</script>

<template>
  <SectionLayout :title="$t('languages.heading')">
    <div class="grid grid-cols-2 font-medium text-gray-700">
      <p>
        {{ $t('languages.english') }} <span class="text-sm text-gray-600">({{ $t('languages.englishLevel') }})</span>
      </p>
      <p>
        {{ $t('languages.spanish') }} <span class="text-sm text-gray-600">({{ $t('languages.spanishLevel') }})</span>
      </p>
    </div>
  </SectionLayout>
</template>
