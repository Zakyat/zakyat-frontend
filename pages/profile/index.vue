<template>
  <v-container>
    <v-alert
      v-if="!me.isActive"
      text
      dismissible
      type="error"
    >Подтвердите свою почту!</v-alert>
    <h1>Личный кабинет</h1>

    <v-card
      flat
      class="mt-5 pa-12"
    >
      <div v-if="me">
        <ProfileMain :firstName="me.firstName" :lastName="me.lastName" :email="me.email" />
      </div>
      <div v-if="me.subscriptions">
        <Subscriptions :subs="me.subscriptions" />
      </div>
      <div v-if="me.transactions">
        <MyDonations :donations="me.transactions" />
      </div>
    </v-card>
  </v-container>
</template>

<script>
import Vue from 'vue';
import ProfileMain from '@/components/profile/ProfileMain';
import Subscriptions from '@/components/profile/Subscriptions';
import MyDonations from '@/components/profile/MyDonations';

import gql from 'graphql-tag';

export default Vue.extend({
  components: {
    MyDonations,
    Subscriptions,
    ProfileMain,
  },
  head: {
    title: 'Профиль | Благотворительный фонд "Закят"',
  },
  data () {
    return {
      me: Object,
    };
  },
  apollo: {
    me: {
      query: gql`
        query {
          me {
            id,
            firstName,
            lastName,
            email,
            isActive
            subscriptions {
              id,
              active,
              amount,
              type,
            },
            transactions {
              id,
              status
              transactionType,
              amount,
              createAt,
              paymentType
              campaign {
                id
                title,
                project {
                  id,
                  title,
                }
              },
            },
          }
        }
      `,
    },
  },
});
</script>
