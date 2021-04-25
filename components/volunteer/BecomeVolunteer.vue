<template>
  <v-container class="become-volunteer">
    <h1 class="text-center">Станьте волонтером</h1>

    <p class="mt-10">Если хотите стать волонтером свяжитесь с нами <br> по номеру телефона:</p>
    <div class="phone">
      <img width="20" :src="require('@/assets/images/projects/svg/icons/phone.svg')" alt="">
      <p class="ml-5 mb-0">
        {{ siteSettings.phone }}
      </p>
    </div>
    <p class="mt-5">или напишите на почту:</p>
    <div class="phone">
      <img width="30" :src="require('@/assets/images/mail.svg')" alt="">
      <p class="ml-5 mb-0">
        {{ siteSettings.email }}
      </p>
    </div>
  </v-container>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'BecomeVolunteer',
  apollo: {
    siteSettings: gql`query{
      siteSettings {
        phone,
        email,
      }
    }`,
  },
  data () {
    return {
      siteSettings: '',
    };
  },
};
</script>

<style>
.become-volunteer {
  padding: 0 67px 67px 67px;
  background-color: #fff;
}

.phone {
  display: flex;
  align-items: center;
}
</style>
