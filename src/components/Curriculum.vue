<script setup lang="ts">
import Experience from './Experience.vue';
import Presentation from './Presentation.vue';
import Education from './Education.vue';
import Skills from './Skills.vue';
import Courses from './Courses.vue';
</script>

<template>
  <div class="w-[210mm] h-[297mm] my-10 mx-auto p-12 bg-white shadow-md">
    <Presentation />

    <Experience class="mt-8"/>

    <Education class="mt-8" />

    <Skills class="mt-8" />

    <Courses class="mt-8" />
  </div>
</template>
