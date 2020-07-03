<template>
  <div>
    <h3 class="mt-12">Ваши контактные данные</h3>
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          placeholder="Имя"
          rounded
          flat
          outlined
          color="grey"
          hide-details
          dense
        >
        </v-text-field>
        <v-text-field
          placeholder="Email"
          rounded
          flat
          outlined
          color="grey"
          hide-details
          dense
          class="mt-3"
        >
        </v-text-field>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          placeholder="Фамилия"
          rounded
          flat
          outlined
          color="grey"
          dense
          hide-details
        >
        </v-text-field>
        <v-text-field
          placeholder="Телефон"
          rounded
          flat
          outlined
          color="grey"
          hide-details
          dense
          class="mt-3"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row
      justify="space-between"
    >
      <v-col
        cols="12"
        md="auto"
      >
        <v-checkbox
          label="Я принимаю условия публичной оферты и даю согласие на обработку персональных данных"
          class="my-0 py-0"
          style="font-size: 10px;"
        >
        </v-checkbox>
      </v-col>
      <v-col
        cols="12"
        md="auto"
      >
        <v-btn
          rounded
          color="primary"
          flat
        >Продолжить</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Contacts',
});
</script>

<style scoped>
</style>
