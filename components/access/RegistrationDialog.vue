<template>
  <div class="registration">
    <v-container class="registration__container rounded">
      <v-row justify="space-between ml-0 mr-0">
        <h2>
          <!--{{ $t('access.registration.title') }}-->
          Регистрация
        </h2>
        <v-btn text class="mt-1 text-capitalize buttonTo" color="#00AC00" @click="toSignInDialog">
          <span>
            <!--{{ $t('access.login.linkAndButtonName') }}-->
            Вход
          </span>
        </v-btn>
      </v-row>
      <p class="pt-4 description">
        <!--{{ $t('access.registration.description') }}-->
        Зарегистрируйтесь через социальные сети
        или электронную почту
      </p>
      <div class="d-flex justify-space-between">
        <v-btn
          width="31%"
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
        >
          <img src="@/assets/images/social-icons/vk.svg">
        </v-btn>
        <v-btn
          width="31%"
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
        >
          <img src="@/assets/images/social-icons/instagram.svg">
        </v-btn>
        <v-btn
          width="31%"
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
        >
          <img src="@/assets/images/social-icons/google.svg">
        </v-btn>
      </div>
      <!--      :placeholder="$t('access.global.emailPlaceholder')"-->
      <v-text-field
        class="mt-5 textField"
        dense
        rounded
        outlined
        placeholder="Эл. почта"
      />
      <!--      :placeholder="$t('access.global.passwordPlaceholder')"-->
      <v-text-field
        v-model="password"
        class="mt-5 textField"
        placeholder="Пароль"
        required
        dense
        rounded
        outlined
        loading
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
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
      </v-text-field>
      <template v-if="progress">
        <p v-if="progress === 34" class="progress-result ml-2 mt-6">
          <!--{{ $t('access.registration.errors.weekPassword') }}-->
          Короткий пароль. Используйте хотя бы 6 символов.
        </p>
        <p v-if="progress === 68" class="progress-result ml-2 mt-6">
          <!--{{ $t('access.registration.errors.averagePassword') }}-->
          Средний пароль
        </p>
        <p v-if="progress === 100" class="progress-result ml-2 mt-6">
          <!--{{ $t('access.registration.errors.goodPassword') }}-->
          Хороший пароль
        </p>
      </template>
      <v-row justify="space-between ml-0 mr-0 mb-3 mt-3">
        <v-checkbox
          v-model="selected"
          class="pt-0"
          color="#00AC00"
        />
        <p class="assigment">
          <!--{{ $t('access.registration.agreements.textFirstPart') }} <a href="#">{{ $t('access.registration.agreements.userAgreementName') }}</a>, {{ $t('access.registration.agreements.textSecondPart') }} <a href="#">{{ $t('access.registration.agreements.confidentialAgreementName') }}</a>-->
          Я ознакомился с <a>Пользовательским соглашением</a>, принимаю его и даю <a>Согласие на обработку персональных данных</a>
        </p>
      </v-row>
      <v-btn
        color="#00AC00"
        dark
        block
        rounded
        height="40px"
        class="text-none buttonTo mt-n2"
      >
        <span class="buttonName">
          <!--{{ $t('access.registration.linkAndButtonName') }}-->
          Зарегистрироваться
        </span>
      </v-btn>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'RegistrationDialog',
  data () {
    return {
      password: '',
      passwordRegexp: /[0-9]/,
      showPassword: false,
      selected: false,
    };
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    progress () : number | undefined {
      if (this.password.length < 6 && this.password.length > 0) { return 34; }
      if ((this.password.length >= 6 && this.password.length < 11) ||
        (this.password.length >= 11 && !this.passwordRegexp.test(this.password))) { return 68; }
      if (this.password.length >= 11 && this.passwordRegexp.test(this.password)) { return 100; }
    },
    color () {
      // return ['error', 'warning', 'success'][Math.floor(this.progress / 35)];
      return ['error', 'warning', 'success'][Math.floor(100 / 35)];
    },
  },
  methods: {
    toSignInDialog () : void {
      this.$emit('set-dialog', 'SignInDialog');
    },
  },
});
</script>

<style lang="scss" scoped>

  .registration__container {
    padding: 0 50px 50px 50px;
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

  .progress-bar {
    width: 320px;
    border-radius: 10px;
  }

  .progress-result {
    font-size: 13px;
  }

  .description {
    font-size: 14px;
  }

  .assigment {
    font-size: 12px;
    width: 300px;
  }

  .textField {
    border: 1px solid black;
    height: 42px;
  }
</style>
