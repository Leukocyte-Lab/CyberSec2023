<script setup lang="ts">
import { ref } from 'vue';
import { useElementSize } from '@vueuse/core';

const decoTextWrapperRef$ = ref<HTMLElement>();
const { width, height } = useElementSize(decoTextWrapperRef$);
</script>

<template>
  <h1 class="spotlight-title">
    <img class="deco" src="@/assets/images/material/title-deco.svg" />
    <span ref="decoTextWrapperRef$" class="outline font-size--header-1 font-bold font-uppercase">
      <slot name="deco" />
    </span>
    <svg
      class="outline-instance"
      :width="width"
      :height="height"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text class="deco-text" y="50%" alignment-baseline="central" fill="transparent" stroke-width="2" stroke="url(#gradient)"><slot name="deco" /></text>
      <defs>
        <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C59EF3" />
          <stop offset="0.351841" stop-color="#A277FD" />
          <stop offset="0.666667" stop-color="#7763F1" />
          <stop offset="1" stop-color="#6C59FF" />
        </linearGradient>
      </defs>
    </svg>
    <span class="text font-size--header-3 font-bold">
      <slot name="text" />
    </span>
    <img class="deco" src="@/assets/images/material/title-deco.svg" />
  </h1>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/scss/modules/theme.module.scss' as theme;
@use '@/assets/styles/scss/modules/palette.module.scss' as palette;
@import '@/assets/styles/scss/variables';
@import '@/assets/styles/scss/libs/mixin';

.spotlight {
  &-title {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .outline {
      opacity: 0;

      &-instance {
        position: absolute;

        .deco-text {
          font-size: calc($h1-font-size * var(--font-scale));
        }
      }
    }

    .deco {
      position: absolute;
      left: calc($h1-font-size * var(--font-scale) * -1 * (1 + 3 * (1 - var(--font-scale))));
      height: calc($h1-font-size * var(--font-scale));
      transform: scale(var(--font-scale));

      &:last-child {
        transform: rotate(180deg) scale(var(--font-scale));
        left: auto;
        right: calc($h1-font-size * var(--font-scale) * -1 * (1 + 3 * (1 - var(--font-scale))));
      }
    }

    .text {
      margin-bottom: 0.75em;
      z-index: 1;
    }
  }
}
</style>
