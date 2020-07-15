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
        class="mt-5"
        :label="$t('access.global.emailPlaceholder')"
        dense
        rounded
        outlined
      />
      <v-text-field
        class="mt-n4"
        :label="$t('access.global.passwordPlaceholder')"
        dense
        rounded
        outlined
      />
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
