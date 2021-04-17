<template>
  <div>
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
      <v-expansion-panel
        class="mt-5 pa-5"
      >
        <SingleParent />
      </v-expansion-panel>
      <v-expansion-panel
        class="mt-5 pa-5"
      >
        <Orphan />
      </v-expansion-panel>
      <v-expansion-panel
        class="mt-5 pa-5"
      >
        <Refugee />
      </v-expansion-panel>
      <v-expansion-panel
        class="mt-5 pa-5"
      >
        <Homeless />
      </v-expansion-panel>
      <v-expansion-panel
        class="mt-5 pa-5"
      >
        <Debtor />
      </v-expansion-panel>
      <v-expansion-panel
        class="mt-5 pa-5"
      >
        <IslamStudent />
      </v-expansion-panel>
    </v-expansion-panels>

    <div class="watermark text-center">Временно не доступно</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ChildrenWithDisabilities from '@/components/help-requests/panels/ChildrenWithDisabilities.vue';
import AdultWithHealthProblems from '@/components/help-requests/panels/AdultWithHealthProblems.vue';
import LargeFamily from '@/components/help-requests/panels/LargeFamily.vue';
import PoorFamily from '@/components/help-requests/panels/PoorFamily.vue';
import Retirees from '@/components/help-requests/panels/Retirees.vue';
import SingleParent from '@/components/help-requests/panels/SingleParent.vue';
import Orphan from '@/components/help-requests/panels/Orphan.vue';
import Refugee from '@/components/help-requests/panels/Refugee.vue';
import IslamStudent from '@/components/help-requests/panels/IslamStudent.vue';
import Homeless from '@/components/help-requests/panels/Homeless.vue';
import Debtor from '@/components/help-requests/panels/Debtor.vue';

export default Vue.extend({
  name: 'HelpRequestCategories',
  components: {
    ChildrenWithDisabilities,
    AdultWithHealthProblems,
    LargeFamily,
    PoorFamily,
    Retirees,
    SingleParent,
    Orphan,
    Refugee,
    IslamStudent,
    Homeless,
    Debtor,
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

.watermark {
  position: fixed;
  top: 40%;
  z-index: 5;
  opacity: 30%;
  font-size: 100px;
}
</style>
