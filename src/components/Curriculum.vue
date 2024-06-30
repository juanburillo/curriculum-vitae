<script setup lang="ts">
import Certificates from './Certificates.vue';
import Education from './Education.vue';
import Experience from './Experience.vue';
import Languages from './Languages.vue';
import Presentation from './Presentation.vue';
import Skills from './Skills.vue';
</script>

<template>
  <div class="w-[210mm] h-[297mm] my-10 mx-auto p-12 space-y-9 shadow-md rounded-md bg-white">
    <Presentation />
    <Experience />
    <Education />
    <Skills />
    <Certificates />
    <Languages />
  </div>
</template>
