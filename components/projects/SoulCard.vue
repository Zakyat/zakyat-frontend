<template>
  <v-card
    flat
    color="#f2f2f2"
    class="project-card mb-5"
  >
    <v-row>
      <v-col
        cols="12"
        md="9"
        class="pb-0"
      >
        <h2 class="title mb-5">
          {{ project.title }}
        </h2>

        <div>
          <p class="description">
            Наш фонд оказывает духовную поддержку пациентам хосписов, людям, оказавшихся в трудной жизненной ситуации, пациентам наркодиспансеров и их близким. Всех этих людей мучает множество вопросов — о жизни и смерти, о справедливости, о нашем предназначении в этом мире.
          </p>

          <p class="description">
            <img style="float: right;" width="270" class="d-none d-lg-block" :src="require('@/assets/images/projects/svg/colored/book.svg')" alt="">
            Мы регулярно посещаем хосписы и наркодиспансеры, подолгу общаемся с их
            обитателями, стараемся ответить на все вопросы и подарить веру в
            Милосердие Создателя.
          </p>
          <p class="description">
            Каждый наш подопечный требует определенного подхода, терпения и понимания
            в общении с ним. Мы часто слышим слова сожаления и видим слезы раскаяния,
            помогаем привести в порядок мысли и сконцентрироваться на главном.
            Многие наши подопечные чувствительны и ранимы, сильно привязываются
            к людям, при этом послушно выполняют все религиозные практики.
            Сектор духовной поддержки — один из самых ответственных и трудоемких
            в нашей работе.
          </p>
        </div>
      </v-col>
      <v-col
        cols="12"
        md="3"
        class="pb-0"
      >
        <v-card
          flat
          color="white"
          class="project-info-card mb-3 pa-7"
        >
          <v-row justify="space-between">
            <b>{{ project.firstNumber }}</b>
            <img width="50" :src="require('@/assets/images/projects/svg/colored/stat_icon.svg')" alt="">
          </v-row>
          <v-row>
            <p class="ma-0">
              человек получило <br> помощь в 2019 год
            </p>
          </v-row>
        </v-card>
        <p>Вы можете пожертвовать любую сумму, чтобы поддержать данный проект.</p>
        <v-btn
          rounded
          dark
          depressed
          color="primary"
          height="40px"
          to="/gatherings"
        >
          Пожертвовать
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SoulCard',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.project-card {
  padding: 30px;
  border-radius: 10px;

  .title {
    font-size: 2rem !important;
    font-weight: 700;
  }

  .description {
    font-size: 16px;
  }

  .project-info-card {
    border-radius: 10px;

    b {
      font-size: 30px;
    }

    p {
      font-size: 15px;
    }
  }
}
</style>
