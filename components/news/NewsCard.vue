<template>
  <v-card
    flat
    nuxt
    :to="`news/${id}`"
    class="mb-5 px-5 pt-3 pb-2"
  >
    <v-row>
      <v-col
        cols="4"
        md="4"
      >
        <v-img
          :src="require('@/assets/images/news/1.png')"
          width="300px"
          style="border-radius: 10px;"
        />
      </v-col>

      <v-col
        cols="8"
        md="8"
      >
        <v-card-title class="text-h5 pa-0">
          {{ title }}
        </v-card-title>
        <v-card-text class="pa-0">
          {{ description }}
        </v-card-text>
        <v-row align="end">
          <v-card-text
            class="pb-0"
            style="color: #9da3a6;"
          >
            {{ localeDate }}
            <v-icon class="px-1" style="color: inherit;">
              mdi-circle-small
            </v-icon>
            {{ createdBy.bio }}
          </v-card-text>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NewsCard',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Object,
      required: true,
    },
  },
  computed: {
    localeDate (): string {
      const date = new Date(this.createdAt).toLocaleDateString(this.$i18n.locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
      return date;
    },
  },
});
</script>
