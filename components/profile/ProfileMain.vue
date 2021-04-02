<template>
  <v-row
    justify="space-between"
  >
    <v-col
      cols="12"
      md="3"
      class="pt-0"
    >
      <v-img
        width="202"
        height="202"
        class="avatar"
        style="margin: 0 auto;"
        :src="require('@/assets/images/banners/3.png')"
      />
      <v-row
        justify="center"
        class="mt-5"
      >
        <nuxt-link to="#" class="change-avatar">
          Изменить фото
        </nuxt-link>
      </v-row>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-form>
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
          rounded
          color="primary"
          class="mt-5"
          width="184"
        >
          <!--        {{ $t('charity.contacts.resumeBtn') }}-->
          Сменить пароль
        </v-btn>
      </v-form>
    </v-col>
    <v-col
      cols="12"
      md="3"
      class="apply-changes"
    >
      <nuxt-link to="#" class="change">
        Сохраненить <br>
        изменения
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ProfileMain',
};
</script>

<style scoped>
.apply-changes {
  display: flex;
  justify-content: center;
}

.change {
  text-decoration: none;
}

.change-avatar {
  text-decoration: none;
}

.avatar {
  border-radius: 200px;
}
</style>
