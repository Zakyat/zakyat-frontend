<template>
  <v-container>
    <h1 class="mt-9 mb-6">
      {{ $t('help_request.title') }}
    </h1>
    <div class="content">
      <h2 v-if="categoryChosen" class="mb-7">
        {{ $t('help_request.your_category') }}:
      </h2>
      <h2 v-else class="mb-2">
<!--        {{ $t('help_request.choose_category') }}:-->
        Благотворительный фонд «Закят» предоставляет помощь по данным категориям:
      </h2>
      <nuxt-child />
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    categoryChosen () {
      return this.$route.name !== 'help-request';
    },
  },
});
</script>

<style scoped lang="scss">
.content {
  border-radius: 15px;
  padding: 40px;
  margin-bottom: 100px;
}
</style>
