<template>
  <v-container>
    <v-row>
      <span>{{ $t('partners') }}
      </span>
    </v-row>
    <v-slide-group
      v-model="model"
      class="pa-4"
      :prev-icon="prevIcon ? 'mdi-minus' : undefined"
      :next-icon="nextIcon ? 'mdi-plus' : undefined"
      :multiple="multiple"
      :mandatory="mandatory"
      :show-arrows="showArrows"
      :center-active="centerActive"
    >
      <v-slide-item
        v-for="n in partners"
        :key="n"
      >
        <img
          class="ma-2 pa-4"
          :src="n.src"
          aspect-ratio="1.5"
        >
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      partners: [
        { src: '/p3.png' },
        { src: '/p4.png' },
        { src: '/p5.png' },
        { src: '/p6.png' },
        { src: '/p1.png' },
        { src: '/p2.png' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2014/09/logo_info_islam.png' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2014/09/islamtoday2.png' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2018/09/100_Untitled-1.png' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },

      ],
    };
  },
});
</script>

<style scoped>
span {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 43px;
  color: #000;
}
</style>
