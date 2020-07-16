<template>
  <div class="sign-up">
    <v-container class="sign-in__container rounded">
      <v-row justify="space-between ml-0 mr-0">
        <h2>
          {{ $t('access.login.title') }}
        </h2>
        <v-btn text class="mt-1 custom-transform-class text-none buttonTo" color="success" @click="toRegistrationDialog">
          <span>
            {{ $t('access.registration.linkAndButtonName') }}
          </span>
        </v-btn>
      </v-row>
      <p class="pt-4">
        {{ $t('access.login.description') }}
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
      <v-text-field
        v-model="email"
        class="mt-5"
        :rules="[rules.email]"
        :placeholder="$t('access.global.emailPlaceholder')"
        dense
        rounded
        outlined
        color="black"
      />
      <v-text-field
        v-model="password"
        :placeholder="$t('access.global.passwordPlaceholder')"
        required
        dense
        rounded
        outlined
        loading
        color="black"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        class="validation v-application"
        @click:append="showPassword = !showPassword"
      >
        <template v-slot:progress>
          <v-progress-linear
            :value="progress"
            :color="color"
            absolute
            height="7"
            class="mt-3 rounded progress-bar"
          />
        </template>
      </v-text-field>
      <template v-if="progress">
        <p v-if="progress === 34" class="progress-result">
          {{ $t('access.registration.errors.weekPassword') }}
        </p>
        <p v-if="progress === 68" class="progress-result">
          {{ $t('access.registration.errors.averagePassword') }}
        </p>
        <p v-if="progress === 100" class="progress-result">
          {{ $t('access.registration.errors.goodPassword') }}
        </p>
      </template>
      <v-btn
        color="success"
        block
        dense
        rounded
        class="custom-transform-class text-none buttonTo"
      >
        {{ $t('access.login.linkAndButtonName') }}
      </v-btn>
      <div class="link-wrapper text-center mt-7">
        <v-btn text class="mt-1 custom-transform-class text-none buttonTo" color="success" @click="toRecoveryDialog">
          <span>
            {{ $t('access.login.reminder') }}
          </span>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SignInDialog',
  data () {
    return {
      email: '',
      rules: {
        email: (value : string) => {
          const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return emailRegexp.test(value) || this.$t('access.login.errors');
        },
      },
      password: '',
      passwordRegexp: /[0-9]/,
      showPassword: true,
    };
  },
  computed: {
    progress () {
      if (this.password.length < 6 && this.password.length > 0) { return 34; }
      if ((this.password.length >= 6 && this.password.length < 11) ||
        (this.password.length >= 11 && !this.passwordRegexp.test(this.password))) { return 68; }
      if (this.password.length >= 11 && this.passwordRegexp.test(this.password)) { return 100; }
    },
    color () {
      return ['error', 'warning', 'success'][Math.floor(this.progress / 35)];
    },
  },
  methods: {
    toRegistrationDialog () : void {
      this.$emit('set-dialog', 'RegistrationDialog');
    },
    toRecoveryDialog () : void {
      this.$emit('set-dialog', 'RecoveryDialog');
    },
  },
});
</script>

<style lang="scss" scoped>
  .sign-in__container {
    padding: 10px 50px 50px 50px;
    background-color: white;
  }

  a {
    text-decoration: none;
  }

  .buttonTo {
    letter-spacing: normal;
    font-weight: normal;
  }
</style>
