<template>
  <v-container>
    <h1>Личный кабинет</h1>

    <v-card
      flat
      class="mt-5 pa-12"
    >
      <ProfileMain />
      <Subscriptions />
      <MyDonations />
    </v-card>
  </v-container>
</template>

<script>
import Vue from 'vue';
import ProfileMain from '@/components/profile/ProfileMain';
import Subscriptions from '@/components/profile/Subscriptions';
import MyDonations from '@/components/profile/MyDonations';

export default Vue.extend({
  components: {
    MyDonations,
    Subscriptions,
    ProfileMain,
  },
});
</script>
