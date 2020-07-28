<template>
  <v-container class="registration-form rounded">
    <v-row justify="space-between mx-0">
      <h2>
        <!--{{ $t('access.registration.title') }}-->
        Регистрация
      </h2>
      <v-btn text class="mt-1 button" color="#00AC00" @click="$emit('set-dialog', 'SignInDialog')">
        <!--{{ $t('access.login.linkAndButtonName') }}-->
        Войти
      </v-btn>
    </v-row>
    <p class="pt-2 registration-form__description">
      <!--{{ $t('access.registration.description') }}-->
      Зарегистрируйтесь через социальные сети
      или электронную почту
    </p>
    <v-row class="recovery-password-form__social-media mt-n3 mb-n3">
      <v-col class="pr-0">
        <v-btn
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
          class="recovery-password-form__social-media-link"
        >
          <img src="@/assets/images/social-icons/vk.svg" alt="vk">
        </v-btn>
      </v-col>
      <v-col class="px-2">
        <v-btn
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
          class="recovery-password-form__social-media-link"
        >
          <img src="@/assets/images/social-icons/instagram.svg" alt="instagram">
        </v-btn>
      </v-col>
      <v-col class="pl-0">
        <v-btn
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
          class="recovery-password-form__social-media-link"
        >
          <img src="@/assets/images/social-icons/google.svg" alt="google">
        </v-btn>
      </v-col>
    </v-row>
    <!--:placeholder="$t('access.global.emailPlaceholder')"-->
    <v-text-field
      type="email"
      class="mt-5 mb-5 recovery-password-form__text-field"
      placeholder="Эл. почта"
      dense
      solo
      flat
      rounded
    />
    <v-text-field
      v-model="password"
      class="mt-5 recovery-password-form__text-field"
      placeholder="Пароль"
      required
      dense
      solo
      flat
      rounded
      loading
      :type="showPassword ? 'text' : 'password'"
      @click:append="showPassword = !showPassword"
    >
      <template v-slot:progress>
        <v-progress-linear
          :value="progress"
          :color="color"
          absolute
          height="6"
          class="mt-3 ml-2 rounded progress-bar"
        />
      </template>
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

    <template v-if="progress">
      <p v-if="progress === 34" class="progress-bar__progress-result ml-2 mt-6">
        <!--{{ $t('access.registration.errors.weekPassword') }}-->
        Короткий пароль. Используйте хотя бы 6 символов.
      </p>
      <p v-if="progress === 68" class="progress-bar__progress-result ml-2 mt-6">
        <!--{{ $t('access.registration.errors.averagePassword') }}-->
        Средний пароль
      </p>
      <p v-if="progress === 100" class="progress-bar__progress-result ml-2 mt-6">
        <!--{{ $t('access.registration.errors.goodPassword') }}-->
        Хороший пароль
      </p>
    </template>
    <v-row justify="space-between mx-0 mb-3 mt-5">
      <v-checkbox
        v-model="agreedToTerms"
        class="pt-0"
        color="#00AC00"
      />
      <p class="assigment">
        <!--{{ $t('access.registration.agreements.textFirstPart') }} <a href="#">{{ $t('access.registration.agreements.userAgreementName') }}</a>, {{ $t('access.registration.agreements.textSecondPart') }} <a href="#">{{ $t('access.registration.agreements.confidentialAgreementName') }}</a>-->
        Я ознакомился с <a href="#">Пользовательским соглашением</a>, принимаю его и даю <a href="#">Согласие на обработку персональных данных</a>
      </p>
    </v-row>
    <v-btn
      color="#00AC00"
      dark
      block
      rounded
      height="40px"
      class="button mt-n2"
    >
      <span class="button__name">
        <!--{{ $t('access.registration.linkAndButtonName') }}-->
        Зарегистрироваться
      </span>
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'RegistrationDialog',
  data () {
    return {
      password: '',
      showPassword: false,
      agreedToTerms: false,
    };
  },
  computed: {
    /*
       add into the progress() method  your own conditions for password
       here just an example of password validating
    */
    // progress () {},
    // into the color() method you can add logic of color change depending on password input
    // color () {},
  },
});
</script>

<style lang="scss" scoped>

  .registration-form {
    padding: 0 50px 40px 55px;
    background-color: white;
  }

  a {
    text-decoration: none;
  }

  .button {
    letter-spacing: normal;
    font-weight: normal;
  }

  .button__name {
    font-size: 16px;
  }

  .progress-bar {
    width: 320px;
    border-radius: 10px;
  }

  .progress-bar__progress-result {
    font-size: 13px;
  }

  .registration-form__description {
    font-size: 14px;
  }

  .assigment {
    font-size: 12px;
    width: 300px;
  }

  .recovery-password-form__text-field {
    border: 1px solid black;
    height: 40px;
  }

  .recovery-password-form__text-field:focus {
    border: 1px solid black;
  }

  .recovery-password-form__social-media {
    text-align: center;
  }

  .recovery-password-form__social-media-link {
    width: 100%;
  }
</style>
