<template>
  <v-row
    class="mt-5"
  >
    <v-col cols="12">
      <h3>{{ $t('charity.paymentMethod.title') }}</h3>
    </v-col>
    <v-col cols="12" class="mt-n2">
      <v-tabs
        v-model="tab"
        hide-slider
        grow
        centered
        center-active
        show-arrows
        class="payment-tabs pa-1"
      >
        <v-tab
          v-for="method in paymentMethods"
          :key="method"
          class="payment-tab"
          active-class="payment-tab-primary"
        >
          {{ method }}
        </v-tab>
      </v-tabs>
    </v-col>
    <v-col cols="12">
      <v-tabs-items v-model="tab" class="mt-n4">
        <v-tab-item>
          <v-card
            flat
          >
            <v-card-text
              class="pa-0 ma-0"
              style="color: black;"
            >
              {{ $t('charity.paymentMethod.bankDonationText') }}
            </v-card-text>

            <DonationAmountSelection @select-days="selectDays" @select-amount="selectAmount" :amounts="amounts" :donation-tabs="donationTabs" />

            <v-row
              v-if="!userLogin"
              justify="space-between"
              class="mt-10"
            >
              <v-col
                cols="auto"
                class="py-0 md-0"
              >
                <h3 v-if="!isAnonymous">
                  {{ $t('charity.contacts.title') }}
                </h3>
              </v-col>
              <v-col
                cols="auto"
                class="py-0 md-0"
              >
                <v-checkbox
                  v-model="isAnonymous"
                  :onchange="makeAnonymous()"
                  class="pa-0 md-0 mt-0"
                  on-icon="mdi-check-box-outline"
                  hide-details
                >
                  <template #label>
                    <span class="black--text"> {{ $t('charity.gathering.anonymous') }} </span>
                  </template>
                </v-checkbox>
              </v-col>
            </v-row>
            <Contacts @user="getUserData" v-if="!isAnonymous" />
            <v-row
              justify="space-between"
            >
              <v-col
                cols="12"
                md="auto"
              >
                <v-checkbox
                  class="my-0 py-0"
                  on-icon="mdi-check-box-outline"
                  v-model="agreedToTerms"
                >
                  <template #label>
                    <i18n path="charity.contacts.terms_conditions.text" tag="span" class="black--text">
                      <template #terms>
                        <nuxt-link to="/" color="primary">
                          {{ $t('charity.contacts.terms_conditions.terms') }}
                        </nuxt-link>
                      </template>
                      <template #data>
                        <nuxt-link to="/" color="primary">
                          {{ $t('charity.contacts.terms_conditions.data_processing') }}
                        </nuxt-link>
                      </template>
                    </i18n>
                  </template>
                </v-checkbox>
              </v-col>
              <v-col
                cols="12"
                md="auto"
              >
                <v-btn
                  rounded
                  color="primary"
                  :disabled="!agreedToTerms"
                  text

                  @click="donate(amount, campaignId, description, donationDays, 2)"
                >
                  {{ $t('charity.contacts.resumeBtn') }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
        <v-tab-item
          v-for="i in paymentMethods.length"
          :key="i"
        >
          <v-card
            flat
          >
            <v-card-text
              class="pa-0 ma-0"
              style="color: black;"
            >
              {{ $t('charity.paymentMethod.defaultText') }}
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import DonationAmountSelection from '@/components/charity/DonationAmountSelection.vue';
import Contacts from '@/components/charity/Contacts.vue';
import gql from 'graphql-tag';

export default Vue.extend({
  name: 'PaymentMethod',
  components: {
    DonationAmountSelection,
    Contacts,
  },
  props: {
    campaignId: {
      type: Number,
      required: true,
    },
  },
  data () {
    return {
      userLogin: false,
      url: '',
      description: '',
      errors: '',
      ok: '',
      transaction: Object,
      subscriptionDays: 0,
      amount: 0,
      tab: null,
      donationDays: 0,
      isAnonymous: false,

      paymentMethods: [
        this.$t('charity.paymentMethod.methods.bank_card'),
        this.$t('charity.paymentMethod.methods.SMS'),
      ],

      amounts: [1, 5, 10, 50, 100, 200, 300, 500],

      donationTabs: [
        {
          days: 0,
          title: this.$t('charity.donationAmountSelection.donation_types.onetime.title'),
          description: this.$t('charity.donationAmountSelection.donation_types.onetime.description'),
        },
        {
          days: 1,
          title: this.$t('charity.donationAmountSelection.donation_types.daily.title'),
          description: this.$t('charity.donationAmountSelection.donation_types.daily.description'),
        },
        {
          days: 30,
          title: this.$t('charity.donationAmountSelection.donation_types.monthly.title'),
          description: this.$t('charity.donationAmountSelection.donation_types.monthly.description'),
        },
      ],
      agreedToTerms: false,
    };
  },
  methods: {
    makeAnonymous () {
      this.$emit('anonymous', this.isAnonymous);
    },
    selectAmount (amount: number) {
      this.amount = amount;
    },
    selectDays (tab: number) {
      this.donationDays = this.donationTabs[tab]?.days;
    },
    getUserData (user: any) {
      this.description = `${user.name} ${user.lastName} ${user.email} ${user.phone}`;
      console.log(this.description);
    },
    donate (amount: number, campaignId: number, description: string, subscriptionDays: number, transactionType: number) {
      this.$apollo.mutate({
        mutation: gql`
          mutation startPayment(
              $amount: Float!,
              $campaignId: Int!,
              $description: String!,
              $subscriptionDays: Int!,
              $transactionType: Int!,
              $successUrl: String!,
              $failUrl: String!
            ) {
              startPayment(
                amount: $amount,
                campaignId: $campaignId,
                description: $description,
                subscriptionDays: $subscriptionDays,
                transactionType: $transactionType,
                successUrl: $successUrl,
                failUrl: $failUrl,
              ) {
                url,
                errors,
                ok,
                transaction{
                  id
                  amount
                  payment{
                    uid
                    status
                  }
                }
              }
            }
        `,
        variables: {
          amount,
          campaignId,
          description,
          subscriptionDays,
          transactionType,
          successUrl: process.env.SUCCESS_PAYMENT_PAGE,
          failUrl: process.env.FAIL_PAYMENT_PAGE,
        },
        update: (cache, result) => {
          this.url = result.data.startPayment.url;
          window.open(this.url, '_self');
        },
      });
    },
  },
});
</script>

<style scoped>
.payment-tabs {
  border: 1px solid black;
  border-radius: 30px;
}

.payment-tab {
  width: 300px;
  border-radius: 30px;
  text-transform: inherit;
  font-size: 15px;
}

.payment-tab-primary {
  background-color: #00ac00;
  color: white !important;
}
</style>
