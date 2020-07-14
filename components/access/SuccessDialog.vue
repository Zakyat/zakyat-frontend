<template>
  <div class="success__container">
    <div class="info-wrapper" align="center">
      <v-icon right size="60px" color="success p-2">mdi-checkbox-marked-circle</v-icon>
      <p class="pt-4">
        {{ $t('access.login.recoveryPassword.success') }}
      </p>
      <div class="link-wrapper mt-7">
        <nuxt-link to="/">
            <span>
              {{ $t('access.login.recoveryPassword.redirectionName') }}
            </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SuccessDialog"
    }
</script>

<style scoped>
  .success__container {
    padding: 10px 50px 50px 50px;
    background-color: white;
  }

  a {
    text-decoration: none;
  }
</style>
