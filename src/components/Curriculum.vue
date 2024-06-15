<script setup lang="ts">
import Courses from './Courses.vue';
import Education from './Education.vue';
import Experience from './Experience.vue';
import Links from './Links.vue';
import Presentation from './Presentation.vue';
import Skills from './Skills.vue';
</script>

<template>
  <div class="w-[210mm] h-[297mm] my-10 mx-auto p-12 space-y-10 bg-white shadow-lg">
    <Presentation />
    <Experience />
    <Education />
    <Skills />
    <Courses />
    <Links />
  </div>
</template>
