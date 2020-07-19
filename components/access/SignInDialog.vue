<template>
  <div class="sign-up">
    <v-container class="sign-in__container rounded">
      <v-row justify="space-between ml-0 mr-0">
        <h2>
          {{ $t('access.login.title') }}
        </h2>
        <v-btn text class="mt-1 custom-transform-class text-none buttonTo" color="#00AC00" @click="toRegistrationDialog">
          <span>
            {{ $t('access.registration.linkAndButtonName') }}
          </span>
        </v-btn>
      </v-row>
      <p class="pt-4 description">
        {{ $t('access.login.description') }}
      </p>
      <div class="d-flex justify-space-between">
        <v-btn
          width="31%"
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
        >
<!--          <img src="@/assets/images/social-icons/vk.svg">-->
        </v-btn>
        <v-btn
          width="31%"
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
        >
<!--          <img src="@/assets/images/social-icons/instagram.svg">-->
        </v-btn>
        <v-btn
          width="31%"
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
        >
<!--          <img src="@/assets/images/social-icons/google.svg">-->
        </v-btn>
      </div>
      <v-text-field
        v-model="email"
        class="mt-5 mb-5 textField"
        :rules="[rules.email]"
        :placeholder="$t('access.global.emailPlaceholder')"
        dense
        rounded
        outlined
      />
      <v-text-field
        v-model="password"
        :placeholder="$t('access.global.passwordPlaceholder')"
        required
        dense
        rounded
        outlined
        class="textField"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
      />
      <v-btn
        color="#00AC00"
        block
        dense
        rounded
        dark
        class="custom-transform-class text-none buttonTo mt-5"
      >
        <span class="buttonName">
          {{ $t('access.login.linkAndButtonName') }}
        </span>
      </v-btn>
      <div class="link-wrapper text-center mt-7">
        <v-btn
          text
          class="mt-1 custom-transform-class text-none buttonTo"
          color="#00AC00"
          height="40px"
          @click="toRecoveryDialog"
        >
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
          return (emailRegexp.test(value)) || this.$t('access.login.errors');
        },
      },
      password: '',
      showPassword: false,
      disabled: false,
    };
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

  .description {
    font-size: 14px;
  }

  .textField {
    border: 1px solid black;
    height: 42px;
  }
</style>
