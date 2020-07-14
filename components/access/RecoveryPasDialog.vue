<template>
  <div class="recovery__container rounded">
    <h2>
      {{ $t('access.login.recoveryPassword.title') }}
    </h2>
    <p class="pt-4">
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
    >
      {{ $t('access.login.recoveryPassword.buttonName') }}
    </v-btn>
    <div class="link-wrapper text-center mt-7">
      <nuxt-link to="/">
            <span>
              {{ $t('access.login.recoveryPassword.redirectionName') }}
            </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RecoveryPasDialog"
    }
</script>

<style scoped>
  .recovery__container {
    padding: 10px 50px 50px 50px;
    background-color: white;
  }

  a {
    text-decoration: none;
  }
</style>
