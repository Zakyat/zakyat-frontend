<template>
  <v-container class="sign-in-form rounded">
    <v-row justify="space-between" class="mx-0 pt-5">
      <h2>
        {{ $t('auth.login.title') }}
      </h2>
      <v-btn
        text
        class="font-weight-regular"
        color="primary"
        @click="$emit('set-dialog', 'RegistrationDialog')"
      >
        {{ $t('auth.registration.register') }}
      </v-btn>
    </v-row>
    <p class="pt-2 mb-0 text-body-2 mb-5">
      {{ $t('auth.login.description') }}
    </p>
    <v-row justify="space-between mb-5">
      <v-col cols="4">
        <v-btn
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
          block
        >
          <img src="@/assets/images/social-icons/vk.svg" alt="vk">
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
          block
        >
          <img src="@/assets/images/social-icons/instagram.svg" alt="instagram">
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
          block
        >
          <img src="@/assets/images/social-icons/google.svg" alt="google">
        </v-btn>
      </v-col>
    </v-row>
    <v-text-field
      v-model="userInfo.email"
      type="email"
      class="mt-2"
      height="40"
      :placeholder="$t('auth.emailPlaceholder')"
      dense
      solo
      flat
      rounded
      outlined
      autofocus
    />
    <v-text-field
      v-model="userInfo.password"
      :placeholder="$t('auth.passwordPlaceholder')"
      required
      dense
      solo
      flat
      rounded
      outlined
      height="40"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
      @click:append="showPassword = !showPassword"
    />
    <v-alert text v-if="errors && errors.length !== 0" type="error">
      {{errors[0]}}
    </v-alert>
    <v-btn
      color="primary"
      block
      dense
      rounded
      dark
      class="font-weight-regular"
      @click="login()"
    >
      <span class="text-body-1">
        {{ $t('auth.login.login') }}
      </span>
    </v-btn>
    <div class="link-wrapper text-center mt-5">
      <v-btn
        text
        class="mt-1 font-weight-regular"
        color="primary"
        height="40"
        @click="$emit('set-dialog', 'PasswordRecoveryDialog')"
      >
        {{ $t('auth.login.forgotPassword') }}
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
  name: 'SignInDialog',
  data () {
    return {
      userInfo: {
        email: '',
        password: '',
      },
      showPassword: false,

      ok: '',
      token: '',
      errors: [],
    };
  },
  methods: {
    login () {
      this.$apollo.mutate({
        mutation: gql`
          mutation auth(
            $email: String!,
            $password: String!
          ) {
            auth (
              email: $email,
              password: $password
            ) {
              ok,
              token,
              errors
            }
          }
        `,
        variables: {
          email: this.userInfo.email,
          password: this.userInfo.password,
        },
        update: (cache, result) => {
          this.token = result.data.auth.token;
          this.ok = result.data.auth.ok;
          this.errors = result.data.auth.errors;

          this.$apolloHelpers.onLogin(this.token);
          if (!result.data.auth.errors || result.data.auth.errors.length === 0) {
            this.$emit('auth');
          }
        },
      });
    },
  },
});
</script>

<style lang="scss" scoped>
  .sign-in-form {
    padding: 0 50px 35px 50px;
  }
</style>
