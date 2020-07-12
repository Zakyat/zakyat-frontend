<template>
  <v-row>
    <v-row
      justify="space-between"
    >
      <v-col
        cols="auto"
      >
        <h2 class="">
          {{ $t('news.specific_news.other_news') }}
        </h2>
      </v-col>
      <v-col
        cols="auto"
      >
        <v-btn
          text
        >
          {{ $t('news.specific_news.see_all') }} <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(item, j) in otherNews"
        :key="j"
        cols="12"
        md="3"
      >
        <OtherNewsCard
          :item="item"
        />
      </v-col>
    </v-row>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import OtherNewsCard from '~/components/news/_id/OtherNewsCard.vue';

export default Vue.extend({
  components: {
    OtherNewsCard,
  },
  props: {
    otherNews: {
      type: Array,
      required: true,
    },
  },
});
</script>
