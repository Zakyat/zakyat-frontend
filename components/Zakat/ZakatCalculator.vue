<template>
  <div>
    <p class="font-weight-black">Выплатить закят</p>
    <p class="font-weight-regular">Рассчитайте закят из вашего состояния</p>
    <p class="text--secondary">Сумма ваших денег</p>
    <v-text-field
      label="Filled"
      placeholder="Dense & Rounded"
      filled
      rounded
      dense
    ></v-text-field>
    <p class="font-weight-regular">Нисаб на сегодня  {{nisabSum}}</p>
    <p class="font-weight-regular">По данным ЦБРФ {{goldPrice}}</p>
    <p class="font-weight-regular">Сумма не облагается закятом</p>
    <v-btn rounded color="primary" dark>Заплатить</v-btn>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  data(){
    return {goldPrice:0,nisabSum:0};
  },
  async mounted(){
    let result=await fetch('https://cors-anywhere.herokuapp.com/http://www.cbr.ru/scripts/xml_metall.asp?date_req1=11/06/2020&date_req2=11/06/2020')
        .then(x=>x.text());
    let parser = new DOMParser();
    this.goldPrice=Number.parseFloat(parser.parseFromString(result,'text/xml').getElementsByTagName('Sell')[0].textContent);
    this.nisabSum=84.8*this.goldPrice;
  },
  methods:{
  }
});
</script>
