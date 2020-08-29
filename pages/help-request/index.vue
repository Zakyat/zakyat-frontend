<template>
  <div>
    <v-card
      v-for="({text, route}, i) in categories"
      :key="i"
      flat
      nuxt
      :to="route"
      class="category"
    >
      {{ text }}
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelpRequestCategories',
  data () {
    return {
      categories: [
        { text: 'ребенок, имеющий проблемы со здоровьем', route: '/help-request/childrenWithDisabilities' },
        { text: 'взрослый, имеющий проблемы со здоровьем', route: '' },
        { text: 'многодетная семья', route: '' },
        { text: 'бедная семья', route: '' },
        { text: 'пенсионеры', route: '' },
        { text: 'родитель-одиночка', route: '' },
        { text: 'сирота', route: '' },
        { text: 'беженец', route: '' },
        { text: 'человек без места проживания или путешественник, который попал в беду', route: '' },
        { text: 'должник', route: '' },
        { text: 'человек, стремящийся к изучению ислама', route: '' },
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
