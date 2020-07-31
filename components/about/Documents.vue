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
        { name: 'Устав', link: '#' }, { name: 'Лист записи', link: require('@/assets/about_us_files/record_sheet.jpeg') },
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
