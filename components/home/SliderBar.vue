<template>
 <v-carousel cycle hide-delimiter-background show-arrows-on-hover >
  <v-carousel-item v-for="(slide, i) in slides" :key="i" xs12 sm6 md4 lg3 >
     <v-card class="pa-md-4 mx-lg-auto" color="white" max-width="870" >
       <v-img class="white--text align-end" height="456px" width="895px" :src="slide.src" >
         <div class="button_slider">
           <v-card-title><h2>{{slide.title}}</h2>
            <h5>{{slide.diagnosis}}</h5>
           </v-card-title>
             <v-card-text>
              <div class="progress">
               <div class="collected">
                 <h3>Собрано</h3>
                  <h4>{{slide.collected}}</h4></div>
                <div class="left">
                  <h3>Осталось</h3>
                   <h4>{{slide.left}}</h4>
                </div>
                  <div class="need">
                    <h3>Необходимо</h3>
                      <h4>{{slide.need}}</h4>
                  </div>
                    <v-card-actions style="">
                      <v-btn rounded dark color="primary">
                            {{ $t('home.projects.help') }}
                      </v-btn>
                    </v-card-actions>
              </div>
                      <v-img v-for="(scale,j) in scales" :key="j" :src="scale.src" width="600" height="3" >
                      </v-img>
             </v-card-text>
         </div>
       </v-img>
     </v-card>
  </v-carousel-item>
 </v-carousel>

</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      slides: [
        { src: require('@/assets/images/slide1.png'), title: 'Бурганова Альфия, 16 лет', diagnosis: 'Идиопатический прогрессирующий сколиоз 4-й степени, спасет операция', collected: '65 065 ₽', left: '435 435 ₽', need: '500 500 ₽' },
        { src: require('@/assets/images/slide2.png'), title: 'Хабибуллин Данияр, 6 лет', diagnosis: 'Идиопатический прогрессирующий сколиоз 4-й степени, спасет операция', collected: '65 065 ₽', left: '435 435 ₽', need: '500 500 ₽' },

      ],
      scales: [
        { src: require('@/assets/images/sl.png') },
        { src: require('@/assets/images/sl.png') },
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
.progress {
  display: flex;
}

.left {
  margin-left: 199px;
}

.collected {
}

.need {
  margin-left: 189px;
}

.button_slider {
  color: #222;
  margin-left: 20px;
  width: 810px;
  height: 180px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 20px;
}

h3 {
  font-size: 16px;
  color: #000;
}

h4 {
  font-size: 14px;
  color: #000;
}
</style>
