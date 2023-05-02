<template>
  <footer class="footer">
    <div class="wrapper wrapper-container row">
      <div class="wrapper wrapper-container col gap-2">
        <CompanyLogo :type="'full'" />
        <div class="wrapper wrapper-container row gap-2">
          <a class="font-size--body-3" href="https://fb.com/LeukocyteLab/"><icon-fa6-brands-facebook-f /></a>
          <a class="font-size--body-3" href="https://www.linkedin.com/company/lkc-lab"><icon-fa6-brands-linkedin-in /></a>
          <a class="font-size--body-3" href="https://twitter.com/CoLeukocyte"><icon-fa6-brands-twitter /></a>
          <a class="font-size--body-3" href="https://medium.com/h1dra-security-team"><icon-fa6-brands-medium /></a>
        </div>
      </div>
      <div class="wrapper wrapper-container row">
        <div class="wrapper wrapper-container col">
          <h3 class="font-size--body-4">Contact Us</h3>
          <a class="font-size--body-4" href="mailto:sales@lkc-lab.com"
            ><icon-ic-round-mail /><span>sales@lkc-lab.com</span></a
          >
          <a class="font-size--body-4" href="tel:+886 2-2950-0110"
            ><icon-ic-round-local-phone /><span>+886 2-2950-0110</span></a
          >
        </div>
        <div class="wrapper wrapper-container col">
          <h3 class="font-size--body-4">Have A Meet</h3>
          <p class="font-size--body-4"><icon-ic-round-access-time-filled /><span>Mon - Fri｜9:30 - 18:30</span></p>
          <a class="font-size--body-4" href="https://goo.gl/maps/YpEMMLj7HfLdGWiZA"
            ><icon-ic-round-location-on /><span>新北市板橋區民族路 34 巷 22 號 2 樓</span></a
          >
        </div>
      </div>
    </div>
    <p class="caption font-size--caption-2 font-align--center">
      &copy; 2023｜盧氪賽忒股份有限公司｜Leukocyte-Lab Co., Ltd.｜All right reserved
    </p>
  </footer>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '@/assets/styles/scss/modules/palette.module.scss' as palette;
@use '@/assets/styles/scss/modules/theme.module.scss' as theme;

.footer {
  background-color: palette.$black;
  color: theme.$primary-text-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5em 6.5em;

  .logo-full {
    max-width: 16.875em;
  }

  .wrapper-container,
  p {
    margin: 0;
  }

  .wrapper-container {
    width: 100%;
    position: relative;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p,
  a {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin-top: 0.5em;
  }

  .caption {
    margin-top: 2em;
    padding-top: 2em;
    border-top: 1px solid color.change(palette.$gray-600, $alpha: 0.6);
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
