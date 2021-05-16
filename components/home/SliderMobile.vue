<template>
  <div v-if="campaigns" class="campaigns">
    <div v-for="(slide, i) in campaigns.filter(item => item.isActive)" :key="i">
      <v-card class="overlay" flat>
        <v-img :src="slide.photo" class="campaign" />
        <v-row class="slide">
          <v-col cols="12">
            <v-card-title class="pb-0">
              {{ slide.title }}
            </v-card-title>
            <v-card-text>
              {{ slide.problem }}
              <v-row no-gutters justify="space-between" class="mt-3">
                <v-col class="pb-1">
                  <p class="subtitle">
                    {{ $t('home.slideshow.collected') }}
                  </p>
                  <p class="font-weight-bold mb-0">
                    {{ slide.moneyCollected | rubles }}
                  </p>
                </v-col>
                <v-spacer />
                <v-col class="pb-1">
                  <p class="subtitle">
                    {{ $t('home.slideshow.remaining') }}
                  </p>
                  <p class="font-weight-bold mb-0">
                    {{ slide.goal - slide.moneyCollected | rubles }}
                  </p>
                </v-col>
                <v-spacer />
                <v-col class="pb-1 text-right">
                  <p class="subtitle">
                    {{ $t('home.slideshow.required') }}
                  </p>
                  <p class="font-weight-bold mb-0">
                    {{ slide.goal | rubles }}
                  </p>
                </v-col>
              </v-row>
              <v-progress-linear
                height="5"
                rounded
                background-color="#DADADA"
                :value="100*slide.moneyCollected/slide.goal"
              />
            </v-card-text>
          </v-col>
          <v-col cols="12" style="margin-left: 20px;">
            <v-row justify="end">
              <v-col>
                <v-btn rounded depressed nuxt :to="`/charity?id=${slide.id}`" color="primary">
                  {{ $t('home.slideshow.donate') }}
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import gql from 'graphql-tag';

export default Vue.extend({
  components: {
  },
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
      campaigns: '',
    };
  },
});
</script>

<style lang="scss" scoped>
.slide {
  margin: 0;
}

.campaigns {
  height: 100% !important;
  width: 100%;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  overflow: auto;
}

.overlay {
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-right: 10px;
  margin-top: 10px;
}

.background {
  border-radius: $card-border-radius;
}

.subtitle {
  margin-bottom: 0;
  color: #9da3a6;
}

.campaign {
  align-self: center;
  border-radius: $card-border-radius;
  width: 90% !important;
}
</style>
