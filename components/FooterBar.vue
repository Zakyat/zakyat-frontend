<template>
  <div>
    <v-footer absolute app color="#202020" style="display: block;">
      <v-row
        justify="center"
      >
        <v-col
          v-for="(page, i) in pages"
          :key="i"
          class="text-center white--text"
          cols="auto"
        >
          <v-btn
            :to="page.link"
            text
            nuxt
            small
            class="pa-4"
            active-class="active"
          >
            {{ page.text }}
          </v-btn>
        </v-col>
        <v-col
          class="text-center white--text"
          cols="auto"
        >
          <v-btn
            text
            nuxt
            small
            class="pa-4"
            active-class="active"
            @click="VolunteerBanner()"
          >
            {{ $t('links.volunteers') }}
          </v-btn>
        </v-col>
        <v-col cols="4" sm="2" lg="1" class="py-2 px-0">
          <LanguageSelector />
        </v-col>
      </v-row>
      <v-row class="my-3">
        <v-col class="py-2 text-center white--text" cols="12">
          <v-btn text small>
            ©{{ new Date().getFullYear() }}  {{ $t('copyright') }}
          </v-btn>
          <v-btn text small :href="`tel:${siteSettings.phone}`">
            {{siteSettings.phone}}
          </v-btn>
          <v-btn text small :href="siteSettings.email">
            {{siteSettings.email}}
          </v-btn>
          <v-btn text small :href="siteSettings.vk">
            <v-icon medium>
              mdi-vk
            </v-icon>
            {{ $t('VK') }}
          </v-btn>
          <v-btn text small :href="siteSettings.insta">
            <v-icon medium>
              mdi-instagram
            </v-icon>
            {{ $t('instagram') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
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

<script lang="ts">
import Vue from 'vue';
import LanguageSelector from '@/components/LanguageSelector.vue';
import BecomeVolunteer from '@/components/volunteer/BecomeVolunteer.vue';

export default Vue.extend({
  components: {
    LanguageSelector,
    BecomeVolunteer,
  },
  props: {
    siteSettings: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      pages: [
        { text: this.$t('links.fees'), link: '/gatherings' },
        { text: this.$t('links.projects'), link: '/' },
        { text: this.$t('links.reports'), link: '/reports' },
        { text: this.$t('links.news'), link: '/news' },
        { text: this.$t('links.about'), link: '/about' },
      ],
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

<style scoped>
.v-btn,
.v-icon,
.v-overflow-btn {
  color: white;
}

.active {
  background-color: black;
}

.select {
  display: inline-flex;
}

</style>
