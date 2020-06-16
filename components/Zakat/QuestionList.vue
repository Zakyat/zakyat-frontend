<template>
  <v-row justify="center" class="grey lighten-5">
    <v-expansion-panels popout>
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
  </v-row>
</template>
