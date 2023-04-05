<script>
export default {
  name: "ChooseVehicle"
}
</script>

<template>
  <section class="section-choose-vehicle section">
    <div class="container">
      <div class="choose-vehicle__container">
        <div class="choose-vehicle__content">
          <div class="choose-vehicle__column">
            <div class="choose-vehicle__images">
              <div class="choose-vehicle__img-wrap">
                <img src="@/assets/imgs/home/choose-vehicle/car1.png" alt="car">
              </div>
              <div class="choose-vehicle__img-wrap">
                <img src="@/assets/imgs/home/choose-vehicle/car2.png" alt="car">
              </div>
            </div>
          </div>

          <div class="choose-vehicle__column">
            <h2 class="title-2 choose-vehicle__title">Сhoose your dream vehicle in our catalog</h2>

            <div>
              <div class="text choose-vehicle__text">In our catalogue there are many models of vehicles. Choose your car to your liking.</div>

              <router-link :to="{name: 'catalog'}" class="choose-vehicle__btn-inventory btn btn_solid">Inventory</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
