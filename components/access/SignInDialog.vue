<template>
  <v-container class="sign-in-form rounded">
    <v-row justify="space-between mx-0">
      <h2>
        <!--{{ $t('access.login.title') }}-->
        Вход
      </h2>
      <v-btn
        text
        class="font-weight-regular button"
        color="#00AC00"
        @click="$emit('set-dialog', 'RegistrationDialog')"
      >
        <!--{{ $t('access.registration.linkAndButtonName') }}-->
        Зарегистрироваться
      </v-btn>
    </v-row>
    <p class="pt-2 sign-in-form__description">
      <!--{{ $t('access.login.description') }}-->
      Войдите через социальные сети или электронную почту
    </p>
    <v-row class="sign-in-form__social-media mt-n3 mb-n3">
      <v-col class="pr-0">
        <v-btn
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
          class="sign-in-form__social-media-link"
        >
          <img src="@/assets/images/social-icons/vk.svg" alt="vk">
        </v-btn>
      </v-col>
      <v-col class="px-2">
        <v-btn
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
          class="sign-in-form__social-media-link"
        >
          <img src="@/assets/images/social-icons/instagram.svg" alt="instagram">
        </v-btn>
      </v-col>
      <v-col class="pl-0">
        <v-btn
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
          class="sign-in-form__social-media-link"
        >
          <img src="@/assets/images/social-icons/google.svg" alt="google">
        </v-btn>
      </v-col>
    </v-row>
    <!--:placeholder="$t('access.global.emailPlaceholder')"-->
    <v-text-field
      v-model="email"
      type="email"
      class="mt-5 mb-5 sign-in-form__text-field"
      placeholder="Эл. почта"
      dense
      solo
      flat
      rounded
    />
    <!--:placeholder="$t('access.global.passwordPlaceholder')"-->
    <v-text-field
      v-model="password"
      placeholder="Пароль"
      required
      dense
      solo
      flat
      rounded
      class="sign-in-form__text-field"
      :type="showPassword ? 'text' : 'password'"
      @click:append="showPassword = !showPassword"
    >
      <template v-slot:append>
        <v-btn
          v-if="showPassword"
          fab
          height="30px"
          width="30px"
          depressed
          color="white"
          class="mt-n1 mr-n3"
        >
          <img src="@/assets/images/dialog-icons/password-icons/show.svg" alt="show" class="mt-2" @click="showPassword = !showPassword">
        </v-btn>
        <v-btn
          v-else
          fab
          height="30px"
          width="30px"
          depressed
          color="white"
          class="mt-n1 mr-n3"
        >
          <img src="@/assets/images/dialog-icons/password-icons/hide.svg" alt="hide" class="mt-1" @click="showPassword = !showPassword">
        </v-btn>
      </template>
    </v-text-field>
    <v-btn
      color="#00AC00"
      block
      dense
      rounded
      dark
      class="font-weight-regular button mt-5"
    >
      <span class="button__name">
        <!--{{ $t('access.login.linkAndButtonName') }}-->
        Войти
      </span>
    </v-btn>
    <div class="link-wrapper text-center mt-5">
      <v-btn
        text
        class="mt-1 font-weight-regular button"
        color="#00AC00"
        height="40px"
        @click="$emit('set-dialog', 'RecoveryDialog')"
      >
        <!--{{ $t('access.login.reminder') }}-->
        Забыли пароль?
      </v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SignInDialog',
  data () {
    return {
      email: '',
      password: '',
      showPassword: false,
    };
  },
});
</script>

<style lang="scss" scoped>
  .sign-in-form {
    padding: 0 50px 35px 50px;
    background-color: white;
  }

  .button {
    font-weight: normal;
    letter-spacing: normal;
  }

  .button__name {
    font-size: 16px;
  }

  .sign-in-form__description {
    font-size: 14px;
  }

  .sign-in-form__text-field {
    border: 1px solid black;
    height: 42px;
  }

  .sign-in-form__social-media {
    text-align: center;
  }

  .sign-in-form__social-media-link {
    width: 100%;
  }
</style>
