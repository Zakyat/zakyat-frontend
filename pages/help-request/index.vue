<template>
  <v-expansion-panels flat>
    <v-expansion-panel
      class="mt-5 pa-5"
    >
      <ChildrenWithDisabilities />
    </v-expansion-panel>
    <v-expansion-panel
      class="mt-5 pa-5"
    >
      <AdultWithHealthProblems />
    </v-expansion-panel>
    <v-expansion-panel
      class="mt-5 pa-5"
    >
      <LargeFamily />
    </v-expansion-panel>
    <v-expansion-panel
      class="mt-5 pa-5"
    >
      <PoorFamily />
    </v-expansion-panel>
    <v-expansion-panel
      class="mt-5 pa-5"
    >
      <Retirees />
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import Vue from 'vue';
import ChildrenWithDisabilities from '@/components/help-requests/panels/childrenWithDisabilities.vue'
import AdultWithHealthProblems from '@/components/help-requests/panels/AdultWithHealthProblems.vue';
import LargeFamily from '@/components/help-requests/panels/LargeFamily.vue';
import PoorFamily from '@/components/help-requests/panels/PoorFamily.vue';
import Retirees from '@/components/help-requests/panels/Retirees.vue';

export default Vue.extend({
  name: 'HelpRequestCategories',
  components: {
    ChildrenWithDisabilities,
    AdultWithHealthProblems,
    LargeFamily,
    PoorFamily,
    Retirees,
  },
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
