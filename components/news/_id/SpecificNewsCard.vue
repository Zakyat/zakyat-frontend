<template>
  <v-card
    flat
    class="pa-5"
  >
    <v-img
      :src="image"
      height="300px"
      style="border-radius: 10px;"
    />
    <v-card-title
      class="pa-0 mt-5"
      style="font-size: 27px;"
    >
      {{ title }}
    </v-card-title>
    <v-card-text class="my-3 pa-0 news-content black--text">
      {{ description }}
    </v-card-text>
    <v-card-subtitle
      class="pa-0 mb-5"
      style="color: #9da3a6;"
    >
      {{ localeDate }}
      <v-icon class="px-1" style="color: inherit;">
        mdi-circle-small
      </v-icon>
      {{ createdBy.bio }}
    </v-card-subtitle>
    <v-row
      style="width: 80%;"
    >
      <v-col
        v-for="tag in tags"
        :key="tag.id"
        cols="auto"
        class="py-0"
      >
        <v-card-text
          class="pa-0"
          style="color: #00ac00;"
        >
          #{{ tag.name }}
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true,
    },
    image: {
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
    tags: {
      type: Array,
      required: true,
    },
  },
  computed: {
    localeDate (): string {
      const date = new Date(this.createdAt);

      return date.toLocaleDateString(this.$i18n.locale, {
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

<style scoped>
.news-content {
  white-space: pre-wrap;
  font-size: 15px;
}
</style>
