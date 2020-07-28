<template>
  <div class="dialog-wrapper">
    <div class="button-wrapper white">
      <v-btn
        icon
        color="black"
        x-large
        @click="$emit('close-dialog')"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <div class="warning__container white">
      <v-icon right size="75px" color="#EB3050">
        mdi-alert-circle
      </v-icon>
      <p class="pt-4 description">
        Заполните все поля для отправки заявления
      </p>
      <v-btn
        text
        class="mt-2 custom-transform-class text-none buttonTo"
        color="#EB3050"
        @click="$emit('close-dialog')"
      >
        <span>
          Вернуться
        </span>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

});
</script>

<style scoped>
.button-wrapper {
  text-align: right;
}

.warning__container {
  padding: 0 50px 35px 50px;
  display: grid;
  place-items: center;
  text-align: center;
}

.description {
  font-size: 14px;
  width: 250px;
}

.buttonTo {
  letter-spacing: normal;
  font-weight: normal;
  width: 140px;
  border-radius: 30px;
  font-size: 16px;
}
</style>
