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
        <v-card-title class="headline pa-0">
          {{ title }}
        </v-card-title>
        <v-card-text class="pa-0">
          {{ content }}
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
            {{ author }}
          </v-card-text>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'NewsCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    date: {
      type: Date as PropType<Date>,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  computed: {
    localeDate (): string {
      return this.date.toLocaleDateString(this.$i18n.locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
    },
  },
});
</script>
