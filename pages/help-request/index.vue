<template>
  <v-container>
    <h1 class="mt-9 mb-6">
      Получить помощь
    </h1>
    <div class="content">
      <!--add !currentContent for disabled components,
      check HelpRequestCategories.vue -> data -> categories.componentName-->
      <h2 v-if="currentContent === 'linkOfCategories' || !currentContent" class="mb-7">
        Выберите свою категорию для получения помощи:
      </h2>
      <!--shows for current category-->
      <h2 v-else class="mb-7">
        Ваша категория для получения помощи:
      </h2>
      <HelpRequestCategories v-if="currentContent === 'linkOfCategories' || !currentContent" @set-content="setContent" />
      <ChildrenWithDisabilitiesHelp v-if="currentContent === 'childrenWithDisabilities'" @set-content="setContent" />
      <!--add here other category-components-->
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import HelpRequestCategories from '@/components/help-requests/HelpRequestCategories.vue';
import ChildrenWithDisabilitiesHelp from '@/components/help-requests/ChildrenWithDisabilitiesHelp.vue';

export default Vue.extend({
  name: 'HelpRequestContent',
  components: {
    ChildrenWithDisabilitiesHelp,
    HelpRequestCategories,
  },
  data () {
    return {
      currentContent: 'linkOfCategories',
    };
  },
  methods: {
    setContent (content: string): void {
      this.currentContent = content;
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
