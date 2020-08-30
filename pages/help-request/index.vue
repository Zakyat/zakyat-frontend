<template>
  <div>
    <v-card
      v-for="({text, route}, i) in categories"
      :key="i"
      flat
      nuxt
      :to="route"
      class="category"
    >
      {{ text }}
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelpRequestCategories',
  data () {
    return {
      categories: [
        { text: this.$t('help_request.categories.child_health_problems.title'), route: '/help-request/childrenWithDisabilities' },
        { text: this.$t('help_request.categories.adult_health_problems.title'), route: '' },
        { text: this.$t('help_request.categories.large_family.title'), route: '' },
        { text: this.$t('help_request.categories.poor_family.title'), route: '' },
        { text: this.$t('help_request.categories.retirees.title'), route: '' },
        { text: this.$t('help_request.categories.single_parent.title'), route: '' },
        { text: this.$t('help_request.categories.orphan.title'), route: '' },
        { text: this.$t('help_request.categories.refugee.title'), route: '' },
        { text: this.$t('help_request.categories.homeless.title'), route: '' },
        { text: this.$t('help_request.categories.debtor.title'), route: '' },
        { text: this.$t('help_request.categories.islam_student.title'), route: '' },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
.category {
  width: 75%;
  height: 46px;
  display: grid;
  align-items: center;
  padding-left: 30px;
  margin-bottom: 1em;
  background-color: #fafafa;
  border: 1px solid #ccc;
  font-size: 1.25em;
}
</style>
