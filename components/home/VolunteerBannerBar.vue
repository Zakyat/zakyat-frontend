<template>
  <div>
    <v-layout class="volunteer-container" row>
      <v-flex xs12 md7>
        <h1>{{ $t('home.volunteer.title') }}</h1>
        <p class="my-5" style="width: 88%;">
          {{ $t('home.volunteer.description') }}
        </p>
        <v-btn height="40" @click="VolunteerBanner()" rounded depressed>
          {{ $t('home.volunteer.join') }}
        </v-btn>
      </v-flex>
      <v-flex xs12 md5>
        <v-img
          class="float-right mb-n7"
          max-width="400px"
          :src="require('@/assets/images/banners/womans.svg')"
        />
      </v-flex>
    </v-layout>
    <v-dialog
      v-model="volunteerDialog"
      width="600"
      :fullscreen="$vuetify.breakpoint.mobile"
    >
      <div class="text-right white">
        <v-btn icon class="mt-3 mr-3" @click="VolunteerBanner()">
          <v-icon color="black" large>
            mdi-close
          </v-icon>
        </v-btn>
      </div>
      <BecomeVolunteer />
    </v-dialog>
  </div>
</template>

<script>
import Vue from 'vue';
import BecomeVolunteer from '@/components/volunteer/BecomeVolunteer';

export default Vue.extend({
  components: {
    BecomeVolunteer,
  },
  data () {
    return {
      volunteerDialog: false,
    };
  },
  methods: {
    VolunteerBanner () {
      this.volunteerDialog = !this.volunteerDialog;
    },
  },
});
</script>

<style lang="scss" scoped>
.volunteer-container {
  background-color: #7fbcaa;
  padding: 80px 6% 30px 6%;
  color: #fff;
  margin: 0;

  h1 {
    font: bold 36px;
    line-height: 43px;
  }
}
</style>
