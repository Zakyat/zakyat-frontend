<template functional>
  <v-row justify="space-between">
    <v-col cols="10">
      <v-card
        flat
        class="category"
      >
        <slot>
          {{ props.text }}
        </slot>
      </v-card>
    </v-col>
    <v-col cols="2" style="text-align: right;">
      <v-btn
        depressed
        dark
        color="#56B756"
        height="46px"
        class="button-to text-none rounded-pill"
        nuxt
        to="/help-request"
      >
        Изменить
      </v-btn>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
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

.button-to {
  letter-spacing: normal;
  font-weight: normal;
  width: 140px;
  border-radius: 30px;
  font-size: 1em;
}
</style>
