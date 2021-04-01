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
      <ProfileMain :firstName="me.firstName" :lastName="me.lastName" :email="me.email" />
      <Subscriptions :subs="me.subscriptions" />
      <MyDonations :donations="me.transactions" />
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
            subscriptions {
              id,
              active,
              amount,
              type,
              campaign {
                id
                title,
                project {
                  id,
                  title,
                }
              }
            },
            transactions {
              id,
              payment {
                status,
              },
              transactionType,
              amount,
              createAt,
              campaign {
                id
                title,
                project {
                  id,
                  title,
                }
              },
            },
            isActive
          }
        }
      `,
    },
  },
});
</script>
