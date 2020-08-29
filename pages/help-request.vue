<template>
  <v-container>
    <h1 class="mt-9 mb-6">
      Получить помощь
    </h1>
    <div class="content">
      <h2 v-if="categoryChosen" class="mb-7">
        Ваша категория для получения помощи:
      </h2>
      <h2 v-else class="mb-7">
        Выберите свою категорию для получения помощи:
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
  background-color: white;
  border-radius: 15px;
  padding: 40px;
  margin-bottom: 100px;
}
</style>
