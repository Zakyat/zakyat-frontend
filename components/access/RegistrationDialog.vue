<template>
  <div class="registration">
    <v-container class="registration__container rounded">
      <v-row justify="space-between ml-0 mr-0">
        <h2>
          {{ $t('access.registration.title') }}
        </h2>
        <v-btn text class="mt-1 text-capitalize buttonTo" color="success" @click="toSignInDialog">
          <span>
            {{ $t('access.login.linkAndButtonName') }}
          </span>
        </v-btn>
      </v-row>
      <p class="pt-4 description">
        {{ $t('access.registration.description') }}
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
        class="mt-5"
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
        loading
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        class="mt-n2"
      >
        <template v-slot:progress>
          <v-progress-linear
            :value="progress"
            :color="color"
            background-color="red"
            absolute
            height="7"
            class="mt-3 ml-2 rounded progress-bar"
          />
        </template>
      </v-text-field>
      <template v-if="progress">
        <p v-if="progress === 34" class="progress-result ml-2">
          {{ $t('access.registration.errors.weekPassword') }}
        </p>
        <p v-if="progress === 68" class="progress-result ml-2">
          {{ $t('access.registration.errors.averagePassword') }}
        </p>
        <p v-if="progress === 100" class="progress-result ml-2">
          {{ $t('access.registration.errors.goodPassword') }}
        </p>
      </template>
      <v-checkbox
        class="mt-n4 mb-4"
        :v-model="selected"
        :label='label'
        color="success"
        @click="selected = !selected"
      />
      <v-btn
        color="success"
        block
        dense
        rounded
        class="custom-transform-class text-none buttonTo mt-n2"
      >
        {{ $t('access.registration.linkAndButtonName') }}
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
      label: this.$t('access.registration.agreements.textFirstPart') + ' ' + this.$t('access.registration.agreements.userAgreementName') + ' '
        + this.$t('access.registration.agreements.textSecondPart') + ' ' + this.$t('access.registration.agreements.confidentialAgreementName'),
    };
  },
  methods: {
    toSignInDialog () : void {
      this.$emit('set-dialog', 'SignInDialog');
    },
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
});
</script>

<style lang="scss" scoped>
  .registration__container {
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

</style>
