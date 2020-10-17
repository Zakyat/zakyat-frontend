<template>
  <v-container>
    <h1 class="mt-12 mb-8">
      Сборы
    </h1>

    <v-card
      v-for="(gathering, i) in gatherings"
      :key="i"
      flat
      style="border-radius: 15px;"
      class="mb-7"
    >
      <v-card-text class="pa-7">
        <v-row align="stretch" no-gutters>
          <v-col cols="3">
            <v-img :src="gathering.src" style="border-radius: 15px;" aspect-ratio="5/6" height="100%" />
          </v-col>
          <v-col>
            <v-row no-gutters>
              <v-col class="px-4">
                <h2 class="display-1 font-weight-bold black--text">
                  {{ gathering.name }}
                </h2>
                <h3 class="subtitle-1 black--text">
                  {{ gathering.problem }}
                </h3>
              </v-col>
              <v-col cols="auto">
                <v-progress-circular
                  rotate="-90"
                  color="primary"
                  background-color="#DADADA"
                  size="60"
                  class="font-weight-bold title"
                  :value="100*gathering.collected/gathering.required"
                >
                  {{ Math.floor(100 * gathering.collected / gathering.required) }}%
                </v-progress-circular>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col class="mt-4 px-4">
                <p>{{ gathering.description }}</p>
              </v-col>
            </v-row>

            <v-row justify="space-around" align="end" no-gutters>
              <v-col cols="9" class="pl-4">
                <v-row justify="space-between">
                  <v-col class="pb-1">
                    <p class="subtitle mb-0 grey--text">
                      {{ $t('home.slideshow.collected') }}
                    </p>
                    <p class="font-weight-bold mb-0">
                      {{ gathering.collected | rubles }}
                    </p>
                  </v-col>
                  <v-spacer />
                  <v-col class="pb-1">
                    <p class="subtitle mb-0 grey--text">
                      {{ $t('home.slideshow.remaining') }}
                    </p>
                    <p class="font-weight-bold mb-0">
                      {{ gathering.required - gathering.collected | rubles }}
                    </p>
                  </v-col>
                  <v-spacer />
                  <v-col class="pb-1 text-right">
                    <p class="subtitle mb-0 grey--text">
                      {{ $t('home.slideshow.required') }}
                    </p>
                    <p class="font-weight-bold mb-0">
                      {{ gathering.required | rubles }}
                    </p>
                  </v-col>
                </v-row>
                <v-progress-linear
                  height="9"
                  rounded
                  background-color="#DADADA"
                  :value="100*gathering.collected/gathering.required"
                />
              </v-col>
              <v-spacer />
              <v-col cols="auto">
                <v-btn
                  rounded
                  depressed
                  dark
                  color="#00AC00"
                  class="text-none donate"
                  style="font-weight: normal;"
                >
                  {{ $t('home.slideshow.donate') }}
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
import { mapState } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapState(['gatherings']),
  },
});
</script>
