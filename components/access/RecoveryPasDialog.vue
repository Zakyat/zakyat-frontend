<template>
  <div class="recovery">
    <div class="recovery__container rounded">
      <h2>
        <!--{{ $t('access.login.recoveryPassword.title') }}-->
        Восстановление пароля
      </h2>
      <p class="pt-4 description">
        <!--{{ $t('access.login.recoveryPassword.description') }}-->
        Мы отправим на указанную электронную почту письмо для восстановления пароля
      </p>
      <!--:placeholder="$t('access.global.emailPlaceholder')"-->
      <v-text-field
        class="mt-5 textField"
        dense
        placeholder="Эл. почта"
        rounded
        outlined
        height="40px"
      />
      <v-btn
        color="#00AC00"
        block
        dense
        rounded
        dark
        class="custom-transform-class text-none buttonTo mt-5"
        @click="toSuccessDialog"
      >
        <!--{{ $t('access.login.recoveryPassword.buttonName') }}-->
        Отправить письмо
      </v-btn>
      <div class="link-wrapper text-center mt-7">
        <v-btn text class="mt-1 custom-transform-class text-none buttonTo" color="#00AC00" @click="toSignInDialog">
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

  .description {
    font-size: 14px;
  }

  .textField {
    border: 1px solid black;
    height: 42px;
  }
</style>
