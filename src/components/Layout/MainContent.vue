<script setup lang="ts"></script>

<template>
  <main class="main-container">
    <SpotlightTitle>
      <template #deco>AGENDA</template>
      <template #text>專業議程</template>
    </SpotlightTitle>
    <SpotlightTitle>
      <template #deco>ACTIVITY</template>
      <template #text>活動資訊</template>
    </SpotlightTitle>
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/scss/modules/theme.module.scss' as theme;

.main {
  &-container {
  }
}
</style>