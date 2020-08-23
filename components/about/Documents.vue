<template>
  <v-container class="pa-0">
    <h2>
      {{ $t('about.documents') }}
    </h2>
    <div
      v-for="document in documents"
      :key="document.id"
      class="mt-3"
    >
      <a
        :href="document.link"
        class="black--text document"
        target="_blank"
      >
        {{ document.name }}
      </a>
      <br>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Employee',
  data () {
    return {
      documents: [
        { name: 'Устав', link: require('file-loader!@/assets/about_us_files/article_of_association.pdf') },
        { name: 'Лист записи', link: require('@/assets/about_us_files/record_sheet.jpeg') },
      ],
    };
  },
});
</script>

<style scoped>
.document {
  text-decoration: none !important;
}
</style>
