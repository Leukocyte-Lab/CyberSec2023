<script setup lang="ts">
const introductions = [
  {
    title: '旗艦館展區',
    content: '專人深度導覽'
  },
  {
    title: 'CyberTelent',
    content: '資安人才招募專區'
  },
  {
    title: '議程分享',
    content: '為你的資安知識充電'
  }
];
</script>

<template>
  <div class="banner banner-container">
    <header class="banner banner-header">
      <div class="logo-bar">
        <CompanyLogo :type="'long'" />
        <icon-ic-round-close class="icon" />
        <EventLogo />
      </div>
      <h1 class="title font-size--header-2 font-bold font-align--center">
        台灣資安大會 參展確定！
      </h1>
      <div class="date font-size--body-2 font-bold font-align--center">
        <p>2023.05.09 TUE.</p>
        <hr class="to" />
        <p>2023.05.11 THU.</p>
      </div>
      <div class="location font-size--body-2 font-bold font-align--center">
        <p>臺北南港展覽二館</p>
        <p class="outline font-size--header-4">R101</p>
        <p>攤位</p>
      </div>
    </header>
    <aside class="banner-intro">
      <div class="banner-intro--item" v-for="intro in introductions" :key="intro.title">
        <h2 class="title font-size--body-1 font-bold font-align--center">
          {{ intro.title }}
        </h2>
        <DashLine />
        <p class="content font-size--body-3 font-align--center">
          {{ intro.content }}
        </p>
      </div>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/scss/modules/palette.module.scss' as palette;
@use '@/assets/styles/scss/modules/theme.module.scss' as theme;
@import '@/assets/styles/scss/variables';
@import '@/assets/styles/scss/libs/mixin';

.banner {
  &-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-image: url('@/assets/images/material/texture.jpg');
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }

  &-header {
    position: relative;
    width: 100%;
    padding: 6.5em 0 5em;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: calc((100vw - 100%) / 2 * -1);
      width: 100vw;
      height: 100%;
      background-image: url('@/assets/images/material/pattern.svg');
      background-position: center;
      pointer-events: none;
      background-size: cover;
    }
  }

  &-intro {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    background: theme.$glass-gradient;
    padding: calc(2.5em * var(--font-scale)) 0;

    @media screen and (max-width: theme.$breakpoint-tablet) {
      flex-direction: column;
    }

    &--item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: theme.$breakpoint-tablet) {
        margin: calc(2em * var(--font-scale)) 0;
      }

      h2,
      p {
        margin: 0;
      }

      svg {
        margin: calc(1.5em * var(--font-scale));
        width: 40%;
      }
    }
  }

  .logo-bar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin: 0 auto;

    @media screen and (max-width: theme.$breakpoint-desktop) {
      width: 85%;
    }

    .icon {
      font-size: calc($body-1-font-size * var(--font-scale));
      height: calc($body-1-font-size * var(--font-scale));
      width: calc($body-1-font-size * var(--font-scale));
      margin: 0 calc($body-1-font-size * var(--font-scale) / 2);
      flex-shrink: 0;
    }
  }

  h1.title {
    margin: 0.3em 0;
    word-break: keep-all;
  }

  .date,
  .location {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin: calc(1.5em * var(--font-scale)) calc(1em * var(--font-scale));

    p {
      margin: 0;
    }

    hr.to {
      display: inline;
      width: 200px;
      height: 0;
      border: none;
      border-top: 2px solid palette.$white;
      margin: 0;
    }
  }

  .location {
    margin-bottom: 0;
  }

  .outline {
    @include text-outline-stroke($stroke-width: calc(3px * var(--font-scale)), $color: palette.$white);
  }
}
</style>
