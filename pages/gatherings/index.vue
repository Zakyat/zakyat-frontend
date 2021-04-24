<template>
  <v-container>
    <h1 class="mt-12 mb-8">
      {{ $t('gatherings.title') }}
    </h1>

    <v-card
      v-for="(campaign, i) in campaigns"
      :key="i"
      flat
      style="border-radius: 15px;"
      class="mb-7"
    >
      <v-card-text class="pa-7">
        <v-row align="stretch" no-gutters>
          <v-col cols="3">
            <v-img :src="campaign.photo" style="border-radius: 15px;" aspect-ratio="5/6" height="100%" />
          </v-col>
          <v-col>
            <v-row no-gutters>
              <v-col class="px-4">
                <h2 class="text-h4 font-weight-bold black--text">
                  {{ campaign.title }}
                </h2>
                <h3 class="text-subtitle-1 black--text">
                  {{ campaign.problem }}
                </h3>
              </v-col>
              <v-col cols="auto">
                <v-progress-circular
                  rotate="-90"
                  color="primary"
                  background-color="#DADADA"
                  size="60"
                  class="font-weight-bold text-h5"
                  :value="100*3000/campaign.goal"
                >
                  {{ Math.floor(100 * campaign.moneyCollected / campaign.goal) }}%
                </v-progress-circular>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col class="mt-4 px-4">
                <p>{{ campaign.description }}</p>
              </v-col>
            </v-row>

            <v-row justify="space-around" align="end" no-gutters>
              <v-col cols="9" class="pl-4">
                <v-row no-gutters justify="space-between">
                  <v-col class="pb-1">
                    <p class="subtitle mb-0 grey--text">
                      {{ $t('home.slideshow.collected') }}
                    </p>
                    <p class="font-weight-bold mb-0">
                      {{ campaign.moneyCollected | rubles }}
                    </p>
                  </v-col>
                  <v-spacer />
                  <v-col class="pb-1">
                    <p class="subtitle mb-0 grey--text">
                      {{ $t('home.slideshow.remaining') }}
                    </p>
                    <p class="font-weight-bold mb-0">
                      {{ campaign.goal - campaign.moneyCollected | rubles }}
                    </p>
                  </v-col>
                  <v-spacer />
                  <v-col class="pb-1 text-right">
                    <p class="subtitle mb-0 grey--text">
                      {{ $t('home.slideshow.required') }}
                    </p>
                    <p class="font-weight-bold mb-0">
                      {{ campaign.goal | rubles }}
                    </p>
                  </v-col>
                </v-row>
                <v-progress-linear
                  height="9"
                  rounded
                  background-color="#DADADA"
                  :value="100*campaign.moneyCollected/campaign.goal"
                />
              </v-col>
              <v-spacer />
              <v-col cols="auto">
                <v-btn
                  v-if="campaign.isActive"
                  rounded
                  depressed
                  dark
                  color="#00AC00"
                  class="text-none donate"
                  style="font-weight: normal;"
                  :to="`/charity?id=${campaign.id}`"
                >
                  {{ $t('home.slideshow.donate') }}
                </v-btn>
                <v-btn
                  v-else
                  rounded
                  depressed
                  dark
                  color="grey"
                  class="text-none donate"
                  style="font-weight: normal;"
                >
                  Сбор еще не открыт
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import gql from 'graphql-tag';

export default Vue.extend({
  apollo: {
    campaigns: {
      query: gql`
        query {
          campaigns {
            id
            photo
            title
            problem
            description
            goal
            createdBy {
              bio
            }
            project{
              title
            }
            moneyCollected
            isActive
          }
        }
      `,
    },
  },
  data () {
    return {
      campaigns: [],
    };
  },
});
</script>
