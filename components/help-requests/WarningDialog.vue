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
    <div class="success__container white">
      <v-icon right size="60px" color="#EB3050">
        mdi-close-circle
      </v-icon>
      <p class="pt-4 description">
        Заполните все поля для отправки заявления
      </p>
      <v-btn
        text
        class="mt-8 custom-transform-class text-none buttonTo"
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

.success__container {
  padding: 0 50px 50px 50px;
  text-align: center;
}

.description {
  font-size: 14px;
}

.buttonTo {
  letter-spacing: normal;
  font-weight: normal;
  width: 140px;
  border-radius: 30px;
  font-size: 16px;
}
</style>
