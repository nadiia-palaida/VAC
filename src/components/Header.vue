<script>
export default {
  name: "Header"
}
</script>

<template>
<header class="header">
  <div class="container">
    <div class="header__content">
      <div class="header__logo">
          <picture>
            <source media="(max-width:768px)" srcset="@/assets/imgs/mobile/logo.svg">
            <img src="@/assets/imgs/logo.svg" alt="logo">
          </picture>
      </div>

      <div class="header__buttons">
        <router-link :to="{name: 'catalog'}" class="header__btn-inventory btn btn_liner btn_bordered">Inventory</router-link>

        <router-link :to="{name: 'quiz'}" class="header__btn-request btn btn_solid">Request a car</router-link>

        <button class="menu-btn">
          <span class="menu-btn__line"></span>
          <span class="menu-btn__line"></span>
          <span class="menu-btn__line"></span>
        </button>
      </div>
    </div>
  </div>
</header>
</template>
