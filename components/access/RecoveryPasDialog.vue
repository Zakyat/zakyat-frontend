<template>
  <div class="recovery">
    <div class="recovery__container rounded">
      <h2>
        {{ $t('access.login.recoveryPassword.title') }}
      </h2>
      <p class="pt-4 description">
        {{ $t('access.login.recoveryPassword.description') }}
      </p>
      <v-text-field
        class="mt-5"
        :label="$t('access.global.emailPlaceholder')"
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
        @click="toSuccessDialog"
      >
        {{ $t('access.login.recoveryPassword.buttonName') }}
      </v-btn>
      <div class="link-wrapper text-center mt-7">
        <v-btn text class="mt-1 custom-transform-class text-none buttonTo" color="success" @click="toSignInDialog">
          <span>
            {{ $t('access.login.recoveryPassword.redirectionName') }}
          </span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'RecoveryPasDialog',
  methods: {
    toSignInDialog () : void{
      this.$emit('set-dialog', 'SignInDialog');
    },
    toSuccessDialog () : void{
      this.$emit('set-dialog', 'SuccessDialog');
    },
  },
});
</script>

<style lang="scss" scoped>
  .recovery__container {
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

  .description {
    font-size: 14px;
  }
</style>
