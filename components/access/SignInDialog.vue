<template>
  <div class="sign-up">
    <v-container class="sign-in__container rounded">
      <v-row justify="space-between ml-0 mr-0">
        <h2>
          {{ $t('access.login.title') }}
        </h2>
        <nuxt-link to="/" class="pt-1" @click="">
            <span>
              {{ $t('access.registration.linkAndButtonName') }}
            </span>
        </nuxt-link>
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
          <img src="@/assets/images/social-icons/vk.svg" />
        </v-btn>
        <v-btn
          width="31%"
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
        >
          <img src="@/assets/images/social-icons/instagram.svg" />
        </v-btn>
        <v-btn
          width="31%"
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
        >
          <img src="@/assets/images/social-icons/google.svg" />
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
      >
        {{ $t('access.login.linkAndButtonName') }}
      </v-btn>
      <div class="link-wrapper text-center mt-7">
        <nuxt-link to="/">
            <span>
              {{ $t('access.login.reminder') }}
            </span>
        </nuxt-link>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'SignInDialog',
};
</script>

<style lang="scss" scoped>
  .sign-in__container {
    padding: 10px 50px 50px 50px;
    background-color: white;
  }

  a {
    text-decoration: none;
  }
</style>
