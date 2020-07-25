<template>
  <div class="cards-wrapper">
    <v-card
      v-for="(category, i) in categories"
      :key="i"
      flat
      class="category"
      @click="$emit('set-content', category.componentName)"
    >
      {{ category.name }}
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
        { name: 'ребенок, имеющий проблемы со здоровьем', componentName: 'childrenWithDisabilities' },
        { name: 'взрослый, имеющий проблемы со здоровьем', componentName: '' },
        { name: 'многодетная семья', componentName: '' },
        { name: 'бедная семья', componentName: '' },
        { name: 'пенсионеры', componentName: '' },
        { name: 'родитель-одиночка', componentName: '' },
        { name: 'сирота', componentName: '' },
        { name: 'беженец', componentName: '' },
        { name: 'человек без места проживания или путешественник, который попал в беду', componentName: '' },
        { name: 'должник', componentName: '' },
        { name: 'человек, стремящийся к изучению ислама', componentName: '' },
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
  justify-content: start;
  align-items: center;
  padding-left: 30px;
  margin-bottom: 13px;
  border-radius: 10px !important;
  background-color: #fafafa;
  border: 1px solid #ccc;
  font-size: 20px;
}
</style>
