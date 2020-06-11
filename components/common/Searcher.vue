<template>
  <v-col id="searcher">
    <v-autocomplete
      id="searcher__input"
      :items="items"
      background-color="white"
      item-color="green"
      placeholder="Введите фразу для поиска"
      no-data-text="Результатов нет. Попробуйте переформулировать."
      append-icon=""
      dense
      clearable
      rounded
    ></v-autocomplete>
  </v-col>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      items: [
        'Сабирзянова Римма Минзагитовна (Отчеты)',
        'Садака (Главная)',
        'Садака в размере 100 000 ₽ собрана за 10 дней в м... (Новости)',
        'Садыков Амирхан (Сборы)',
        'Садыков Амирхан (Отчеты)',
      ],
    };
  },
};
</script>

<style scoped>
#searcher {
  display: none;
  position: absolute;
  margin-left: 400px;
  margin-top: 50px;
  padding-left: 0;
  padding-right: 0;
  height: 60px;
  width: 600px;
  z-index: 100;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

#list-24 {
  padding-left: 10px;
}

.v-list-item {
  font-weight: bold;
  font-size: 16px;
}
</style>
