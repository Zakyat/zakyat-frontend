<template>
  <v-container class="sign-in__container rounded">
    <v-row justify="space-between ml-0 mr-0">
      <h2>
        <!--{{ $t('access.login.title') }}-->
        Вход
      </h2>
      <v-btn
        text
        class="custom-transform-class text-none buttonTo"
        color="#00AC00"
        @click="$emit('set-dialog', 'RegistrationDialog')"
      >
        <span>
          <!--{{ $t('access.registration.linkAndButtonName') }}-->
          Зарегистрироваться
        </span>
      </v-btn>
    </v-row>
    <p class="pt-2 description">
      <!--{{ $t('access.login.description') }}-->
      Войдите через социальные сети или электронную почту
    </p>
    <div class="d-flex justify-space-between">
      <v-btn
        width="31%"
        color="rgba(0, 0, 0, 0.2)"
        outlined
        rounded
      >
        <img src="@/assets/images/social-icons/vk.svg" alt="vk"/>
      </v-btn>
      <v-btn
        width="31%"
        color="rgba(0, 0, 0, 0.2)"
        outlined
        rounded
      >
        <img src="@/assets/images/social-icons/instagram.svg" alt="instagram">
      </v-btn>
      <v-btn
        width="31%"
        color="rgba(0, 0, 0, 0.2)"
        outlined
        rounded
      >
        <img src="@/assets/images/social-icons/google.svg" alt="google">
      </v-btn>
    </div>
    <!--:placeholder="$t('access.global.emailPlaceholder')"-->
    <v-text-field
      v-model="email"
      type="email"
      class="mt-5 mb-5 textField"
      placeholder="Эл. почта"
      dense
      rounded
      outlined
    />
    <!--:placeholder="$t('access.global.passwordPlaceholder')"-->
    <v-text-field
      v-model="password"
      placeholder="Пароль"
      required
      dense
      rounded
      outlined
      class="textField"
      :type="showPassword ? 'text' : 'password'"
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
          <img src="@/assets/images/dialog-icons/password-icons/show.svg" alt="show" class="mt-1" @click="showPassword = !showPassword">
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
          <img src="@/assets/images/dialog-icons/password-icons/hide.svg" alt="hide" @click="showPassword = !showPassword">
        </v-btn>
      </template>
    </v-text-field>
    <v-btn
      color="#00AC00"
      block
      dense
      rounded
      dark
      class="custom-transform-class text-none buttonTo mt-5"
    >
      <span class="buttonName">
        <!--{{ $t('access.login.linkAndButtonName') }}-->
        Войти
      </span>
    </v-btn>
    <div class="link-wrapper text-center mt-5">
      <v-btn
        text
        class="mt-1 custom-transform-class text-none buttonTo"
        color="#00AC00"
        height="40px"
        @click="$emit('set-dialog', 'RecoveryDialog')"
      >
        <span>
          <!--{{ $t('access.login.reminder') }}-->
          Забыли пароль?
        </span>
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
  .sign-in__container {
    padding: 0 50px 35px 50px;
    background-color: white;
  }

  a {
    text-decoration: none;
  }

  .buttonTo {
    letter-spacing: normal;
    font-weight: normal;
  }

  .buttonName {
    font-size: 16px;
  }

  .description {
    font-size: 14px;
  }

  .textField {
    border: 1px solid black;
    height: 42px;
  }
</style>
