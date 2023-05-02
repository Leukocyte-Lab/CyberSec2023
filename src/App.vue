<script setup lang="ts">
import { setupModules } from '@/modules';
import { useMeta } from '@/modules/meta/meta.service';

setupModules();

const meta$ = useMeta();
meta$.SetMeta();
</script>

<template>
  <MainBanner />
  <MainContent />
  <MainFooter />
</template>

<style lang="scss">
@import '@/assets/styles/scss/main';
</style>
