<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const changeLocale = (lang: string) => {
  locale.value = lang;
};
</script>

<template>
  <div class="mb-10 flex justify-center gap-x-10 text-white">
    <p @click="changeLocale('es')" class="underline cursor-pointer hover:opacity-70 transition-all duration-150 ease-in-out">Español</p>
    <p @click="changeLocale('en')" class="underline cursor-pointer hover:opacity-70 transition-all duration-150 ease-in-out">English</p>
  </div>
</template>
