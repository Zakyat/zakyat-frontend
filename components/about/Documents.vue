<template>
  <v-container class="pa-0">
    <h2>
      {{ $t('about.documents') }}
    </h2>
    <v-row
      v-for="(document, i) in documents"
      :key="i"
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
        { name: this.$t('about.document_names.regulation'), link: '/article_of_association.pdf' },
        { name: this.$t('about.document_names.record_sheet'), link: require('@/assets/about_us_files/record_sheet.jpeg') },
      ],
    };
  },
});
</script>
