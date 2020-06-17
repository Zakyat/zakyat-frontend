<template>
  <v-expansion-panels flat>
    <v-expansion-panel
      v-for="({question, answer}) in $t('zakat.questions')"
      :key="question"
      class="my-3"
      style="border-radius: 10px"
    >
      <v-expansion-panel-header class="font-weight-medium">{{ question }}</v-expansion-panel-header>
      <v-expansion-panel-content>{{ answer }}</v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
