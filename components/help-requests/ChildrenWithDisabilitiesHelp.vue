<template>
  <div class="category-wrapper">
    <v-row justify="space-between">
      <v-col cols="10">
        <v-card
          flat
          class="category"
        >
          ребенок, имеющий проблемы со здоровьем
        </v-card>
      </v-col>
      <v-col cols="2" style="text-align: right;">
        <v-btn
          depressed
          dark
          color="#56B756"
          height="46px"
          @click="$emit('set-content', 'linkOfCategories')"
          class="buttonTo text-none rounded-pill"
        >
          Изменить
        </v-btn>
      </v-col>
    </v-row>
    <p class="mt-3" style="font-size: 16px;">Для выбранной категории вам нужно заполнить информацию о себе, супруге и о всех своих детях</p>
  </div>
</template>

<script>
export default {
  name: 'ChildrenWithDisabilitiesHelp',
};
</script>

<style scoped>
.buttonTo {
  letter-spacing: normal;
  font-weight: normal;
  width: 140px;
  border-radius: 30px;
  font-size: 16px;
}

.category {
  height: 46px;
  display: grid;
  place-items: center;
  margin-bottom: 13px;
  border-radius: 30px !important;
  background-color: #e5e5e5;
  border: 1px solid #ccc;
  font-size: 20px;
}
</style>
