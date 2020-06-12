<template>
  <div>
    <h3>{{ $t('ZakatPage.Calculator.title') }}</h3>
    <h4>{{ $t('ZakatPage.Calculator.title2') }}</h4>
    <v-text-field
      v-model="inputSum"
      placeholder="Сумма ваших денег ₽"
      filled
      rounded
      type="Number"
      dense
    />
    <p class="font-weight-regular">
      {{ $t('ZakatPage.Calculator.nisabtoday') }}  {{ nisabSum }} ₽
    </p>
    <p class="font-weight-regular">
      {{ $t('ZakatPage.Calculator.bank') }} {{ goldPrice }} ₽/г золото
    </p>
    <br>
    <div v-if="nisabSum<=inputSum">
      <h4>{{ $t('ZakatPage.Calculator.yourzakat') }} {{ 0.025*inputSum }}</h4>
      <v-btn rounded color="primary" dark>
        {{ $t('ZakatPage.Calculator.pay') }}
      </v-btn>
    </div>
    <div v-else>
      <p class="font-weight-regular">
        {{ $t('ZakatPage.Calculator.nopay') }}
      </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data () {
    return { goldPrice: 0, nisabSum: 0, inputSum: null };
  },
  async mounted () {
    const date = new Date(Date.now()).toLocaleString().split(',')[0];
    const result = await fetch('https://cors-anywhere.herokuapp.com/http://www.cbr.ru/scripts/xml_metall.asp?date_req1=' + date + '&date_req2=' + date)
      .then(x => x.text());
    const parser = new DOMParser();
    this.goldPrice = Number.parseFloat(parser.parseFromString(result, 'text/xml').getElementsByTagName('Sell')[0].textContent.replace(',', '.'));
    this.nisabSum = Number.parseFloat(84.8 * this.goldPrice);
  },
});
</script>
