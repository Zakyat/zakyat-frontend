<template>
  <div>
    <p class="font-weight-black">Выплатить закят</p>
    <p class="font-weight-regular">Рассчитайте закят из вашего состояния</p>
    <p class="text--secondary">Сумма ваших денег</p>
    <v-text-field
      label="Filled"
      placeholder="Dense & Rounded"
      filled
      rounded
      dense
    ></v-text-field>
    <p class="font-weight-regular">Нисаб на сегодня</p>
    <p class="font-weight-regular">По данным ЦБРФ</p>
    <p class="font-weight-regular">Сумма не облагается закятом</p>
    <v-btn rounded color="primary" dark>Заплатить</v-btn>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
});
</script>
