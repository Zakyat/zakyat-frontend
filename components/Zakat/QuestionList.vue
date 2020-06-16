<template>
  <v-card
    class="grey lighten-4"
    outlined
  >
    <v-expansion-panels popout flat>
      <v-expansion-panel
        v-for="({question, answer}) in $t('zakat.questions')"
        :key="question"
        class="ma-2"
        style="border-radius: 10px"
      >
        <v-expansion-panel-header>{{ question }}</v-expansion-panel-header>
        <v-expansion-panel-content>{{ answer }}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>
