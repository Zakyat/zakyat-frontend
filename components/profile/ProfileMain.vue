<template>
  <v-row
    justify="space-between"
  >
    <div>
      <v-img
        width="202"
        height="202"
        rounded
        :src="require('@/assets/images/banners/3.png')"
      />
      <nuxt-link to="#">
        Изменить фото
      </nuxt-link>
    </div>
    <div>
      <v-text-field
        :placeholder="$t('charity.contacts.name')"
        rounded
        flat
        outlined
        color="grey"
        hide-details
        dense
      />
      <v-text-field
        :placeholder="$t('charity.contacts.email')"
        rounded
        flat
        outlined
        color="grey"
        hide-details
        dense
        class="mt-3"
      />
      <v-btn
        text
        rounded
        color="primary"
        class="mt-5"
        style="width: 184px;"
      >
        <!--        {{ $t('charity.contacts.resumeBtn') }}-->
        Сменить пароль
      </v-btn>
    </div>
    <div>
      <nuxt-link to="#">
        Сохраненить изменения
      </nuxt-link>
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'ProfileMain',
};
</script>

<style scoped>
.change {
  text-decoration: none;
}
</style>
