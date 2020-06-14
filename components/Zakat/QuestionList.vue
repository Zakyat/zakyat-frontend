<template>
  <div>
    <v-row justify="center" class="grey lighten-5">
      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="question in $t('ZakatPage.Question.questions')"
          :key="question.questiontext"
          class="ma-2"
        >
          <v-expansion-panel-header>{{ question.question }}</v-expansion-panel-header>
          <v-expansion-panel-content>{{ question.answer }}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>
