<template>
  <HelpRequestCategories @set-content="setContent" />
</template>

<script lang="ts">
import Vue from 'vue';
import HelpRequestCategories from '@/components/help-requests/HelpRequestCategories.vue';

export default Vue.extend({
  name: 'HelpRequestContent',
  components: {
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
