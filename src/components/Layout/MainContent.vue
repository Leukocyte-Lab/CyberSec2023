<script setup lang="ts"></script>

<template>
  <main class="main-container">
    <div class="wrapper wrapper-container">
      <a
        href="https://cyber.ithome.com.tw/2023/exhibition-page/1348"
        target="_blank"
        rel="noopener noreferrer"
        class="button font-size--body-2 font-bold"
        ><span>瞭解更多</span></a
      >
    </div>
    <article class="article">
      <SpotlightTitle>
        <template #deco>AGENDA</template>
        <template #text>專業議程</template>
      </SpotlightTitle>
      <h2 class="subtitle font-size--header-4">關於講者</h2>
      <div class="wrapper wrapper-container row gap-8 align-center">
        <img src="@/assets/images/material/boss.svg" alt="" />
        <div class="wrapper wrapper-container col gap-2">
          <img class="deco-bar" src="@/assets/images/material/deco-bar.svg" alt="" />
          <p class="paragraph font-size--body-3 isolate">
            台灣國產駭客入侵與攻擊演練平台領導品牌新創資安公司— Leukocyte-Lab
            的創辦⼈兼執⾏長，擁有豐富的資安相關經驗和專業知識。
          </p>
        </div>
      </div>
      <h2 class="subtitle font-size--header-4">議程資訊</h2>
      <div class="wrapper-container col gap-7">
        <section class="session featured align--left">
          <div class="wrapper wrapper-container row gap-2">
            <span class="outline deco font-size--header-2 font-bold">01</span>
            <div class="wrapper wrapper-container col">
              <label class="label font-size--body-4">Blue Team 論壇</label>
              <h1 class="font-size--header-4">資安團隊全面提升，<br />從攻擊演練到投資管理</h1>
              <div class="wrapper wrapper-container row">
                <p class="info font-size--body-3 font-semibold">
                  <icon-ic-round-access-time-filled />
                  <span class="time">2023/05/11（四）10:15 - 10:45</span>
                </p>
                <p class="info font-size--body-3 font-semibold">
                  <icon-ic-round-location-on />
                  <span class="location">7F - 701C</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <p class="session mini paragraph font-size--body-3 align--right">
          本議程旨在探討有效經營資安團隊並讓資安人員能發揮更高的效益的方法。從攻擊演練的角度，將資安營運切分為建設、團隊和投資三個面向。並著重於事件發生的前、中、後階段，探討如何提升資安管理者在資安投資層面的採購評估與決策效率、資安建設的資安強韌性量測與產品驗證效率，以及提升資安團隊的臨場應變和資安演練效率。
        </p>
      </div>
      <div class="wrapper-container col gap-7">
        <section class="session featured align--right">
          <div class="wrapper wrapper-container row gap-2">
            <span class="outline deco font-size--header-2 font-bold">02</span>
            <div class="wrapper wrapper-container col">
              <label class="label font-size--body-4"
                >CYBERSEC 資安證照日（Cyber Talent 專區）</label
              >
              <h1 class="font-size--header-4">
                資安新思維：加入 Leukocyte-Lab<br />開創資安價值轉化的未來
              </h1>
              <div class="wrapper wrapper-container row">
                <p class="info font-size--body-3 font-semibold">
                  <icon-ic-round-access-time-filled />
                  <span class="time">2023/05/11（四）14:45 - 15:00</span>
                </p>
                <p class="info font-size--body-3 font-semibold">
                  <icon-ic-round-location-on />
                  <span class="location">4F - Cyber Talent 專區</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <p class="session mini paragraph font-size--body-3 align--left">
          Leukocte-Lab 的核心理念是將資安技術轉化為價值，提供優良的價值傳遞管道。<br />
          如果你對打造將知識轉化為價值的新世代資安產品有熱忱，或者熱愛接受困難挑戰，對於改變價值傳遞管道的創新商業模式有興趣，那麼我們肯定是你最佳的選擇。
        </p>
      </div>
    </article>
    <article id="activity" class="article">
      <SpotlightTitle>
        <template #deco>ACTIVITY</template>
        <template #text>活動資訊</template>
      </SpotlightTitle>
      <div class="wrapper wrapper-container row gap-8">
        <TargetRing>
          <template #title>Tech Demo</template>
          <template #subtitle>5/9 (二) - 5/11 (四) 14:10 - 14:40</template>
        </TargetRing>
        <div class="wrapper wrapper-container col gap-2">
          <h2 class="font-size--body-1">
            智慧報告、即時串流、簡單操作，<br />ArgusHack - APT 新升級
          </h2>
          <p class="paragraph font-size--body-3">
            展示 ArgusHack-APT 全新的即時串流畫面與新款演練執行介面，<br />
            讓您能快速掌握當前演練狀態，並使操作更簡單易用。
          </p>
        </div>
      </div>
    </article>
    <article class="article align--center">
      <SpotlightTitle>
        <template #deco>LOCATION</template>
        <template #text>攤位資訊</template>
      </SpotlightTitle>
      <p class="paragraph font-size--body-1 font-bold font-align--center">
        抵達展館 4 樓後，從 R 區入口進來就可以看到我們囉！
      </p>
      <div class="wrapper wrapper-container align--center">
        <a href="https://goo.gl/maps/hrwEaN9wkvAroPCf6" target="_blank" rel="noopener noreferrer" class="button font-size--body-2 font-bold"><span>查看會場位置</span></a>
      </div>
      <img class="align--center" src="@/assets/images/material/R101-map.svg" alt="" />
    </article>
    <article id="product" class="article align--center">
      <SpotlightTitle>
        <template #deco>PRODUCT</template>
        <template #text>我們的產品</template>
      </SpotlightTitle>
      <div class="wrapper wrapper-container col gap-4 align--center">
        <AGHLogo />
        <p class="session paragraph font-size--body-3 font-align--center align--center">
          ArgusHack 透過自動化、虛擬化與智慧化提升資安演練效率，<br />
          並能輔助資安驗證、政策檢視、投資評估、成效檢視等。
        </p>
        <AGHEyeRingLogo />
      </div>
      <div class="session mini wrapper wrapper-container col align--center">
        <img class="icon align--center" src="@/assets/images/material/icon-hand-lock.svg" alt="" />
        <h3 class="font-size--header-4 font-align--center">您是企業的資安團隊成員嗎？</h3>
        <p class="paragraph font-size--body-3 font-align--center">
          ArgusHack
          能有效幫助您評估資安建設可視性、為資安團隊進行真實演練，並能協助評估資安投資有效性，藉此全面提升您的資安體系健全度。
        </p>
        <a href="https://resource.lkc-lab.com/AGH-White-Paper-1" target="_blank" rel="noopener noreferrer" class="button font-size--body-2 font-bold"><span>下載產品白皮書<icon-ic-outline-file-download /></span></a>
      </div>
      <div class="session mini wrapper wrapper-container col align--center">
        <img class="icon align--center" src="@/assets/images/material/icon-hand-shake.svg" alt="" />
        <h3 class="font-size--header-4 font-align--center">
          您是提供資安產品<br />與服務的企業嗎？
        </h3>
        <p class="paragraph font-size--body-3 font-align--center">
          ArgusHack 能協助您呈現資安設備的成效，並加強客戶對產品的信心。<br />透過 ArgusHack
          的自動化技術更能有效降低人力成本，也作為企業不斷累積技術的軍火庫。
        </p>
        <a href="https://resource.lkc-lab.com/AGH-White-Paper-2" target="_blank" rel="noopener noreferrer" class="button font-size--body-2 font-bold"><span>下載產品白皮書<icon-ic-outline-file-download /></span></a>
      </div>
    </article>
    <article id="hiring" class="article align--center">
      <div class="wrapper wrapper-container col gap-4 align--center">
        <div class="wrapper wrapper-container col">
          <h2 class="font-size--body-2 font-bold font-align--center">現正招募中</h2>
          <h1 class="font-size--header-1 font-black outline font-align--center">WE ARE HIRING</h1>
          <p class="font-size--body-3 font-align--center">
            邀請您一起對抗資安威脅，為業界注入更多資安免疫力。
          </p>
          <div class="wrapper wrapper-container align--center">
            <a href="https://www.cakeresume.com/companies/leukocyte-lab-co-ltd/jobs" target="_blank" rel="noopener noreferrer" class="button font-size--body-2 font-bold"><span>加入我們</span></a>
          </div>
        </div>
        <div class="session">
          <div class="wrapper wrapper-container row gap-8">
            <div class="wrapper wrapper-container col gap-2">
              <h3 class="font-size--header-4 font-bold">與我們聊聊</h3>
              <hr />
              <p class="paragraph font-size--body-2">
                我們在 4F CT08
                攤位設有人才招募專區，歡迎對我們公司文化及職缺有興趣的人才前來互動交流！
              </p>
            </div>
            <img src="@/assets/images/material/CT08-map.svg" alt="" />
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/scss/modules/theme.module.scss' as theme;
@import '@/assets/styles/scss/variables';

.main {
  &-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon {
      width: calc($h1-font-size * var(--font-scale));
    }

    #hiring,
    #product,
    #activity {
      @media screen and (max-width: theme.$breakpoint-desktop-xl) {
        text-align: center;
      }
    }

    .time,
    .location {
      @media screen and (max-width: theme.$breakpoint-desktop-xl) {
        white-space: nowrap;
        margin: 0.5em;
      }
    }
  }
}
</style>
