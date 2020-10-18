<template>
  <v-container class="pa-0">
    <h2>
      {{ $t('about.documents') }}
    </h2>
    <v-row
      v-for="document in documents"
      :key="document.id"
      no-gutters
    >
      <v-col>
        <a
          :href="document.link"
          class="black--text text-decoration-none"
          target="_blank"
        >
          {{ document.name }}
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Documents',
  data () {
    return {
      documents: [
        { name: 'Устав', link: require('@/assets/about_us_files/article_of_association.pdf') },
        { name: 'Лист записи', link: require('@/assets/about_us_files/record_sheet.jpeg') },
      ],
    };
  },
});
</script>
