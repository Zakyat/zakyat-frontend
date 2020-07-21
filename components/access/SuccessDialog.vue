<template>
  <div class="success__container rounded">
    <div class="info-wrapper">
      <img src="@/assets/images/dialog-icons/success-dialog/send.svg" alt="success">
      <p class="pt-4 description">
        <!--{{ $t('access.login.recoveryPassword.success') }}-->
        Письмо для восстановления пароля успешно отправлено. Проверьте вашу почту.
      </p>
      <div class="link-wrapper mt-7">
        <v-btn text class="mt-1 custom-transform-class text-none buttonTo" color="#00AC00" @click="$emit('set-dialog', 'SignInDialog');">
          <span>
            <!--{{ $t('access.login.recoveryPassword.redirectionName') }}-->
            Вернуться ко входу
          </span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SuccessDialog',
});
</script>

<style lang="scss">
  .success__container {
    padding: 5px 50px 50px 50px;
    background-color: white;
  }

  a {
    text-decoration: none;
  }

  .buttonTo {
    letter-spacing: normal;
    font-weight: normal;
  }

  .info-wrapper {
    text-align: center;
  }

  .description {
    font-size: 14px;
  }
</style>
