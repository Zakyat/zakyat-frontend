<template>
<v-tooltip top max-width="400px">
        <template v-slot:activator="{ on }">
          <span v-on="on" style="color:red">{{item.word}}</span>
        </template>
        <span>{{item.description}}</span>
        </v-tooltip>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  props: ['item']
})
</script>