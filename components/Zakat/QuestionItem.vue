<template>
  <div>
    <v-expansion-panel-header>{{question.question}}</v-expansion-panel-header>
    <v-expansion-panel-content>{{question.answer}}</v-expansion-panel-content>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    question: {
      question: String,
      answer: String,
    },
  },
});
</script>
