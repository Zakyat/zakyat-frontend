<template>
  <v-col id="searcher">
    <v-autocomplete
      :items="items"
      background-color="white"
      item-color="green"
      :placeholder="$t('search.placeholder')"
      :no-data-text="$t('search.noDataText')"
      append-icon=""
      dense
      clearable
      rounded
    ></v-autocomplete>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SearchBar',
  data () {
    return {
      items: this.$t('search.suggestions'),
    };
  },
});
</script>

<style lang="scss" scoped>
#searcher {
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  padding-left: 0;
  padding-right: 0;
  height: 60px;
  width: 600px;
  font-family: "Roboto", Arial, sans-serif;
  color: black;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100;
}

#list-24 {
  padding-left: 10px;
  font-family: "Roboto", Arial, sans-serif;
}

.v-list-item {
  font-weight: bold;
  font-size: 16px;
}
</style>
