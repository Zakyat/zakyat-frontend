<template>
  <div>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ $t('ZakatPage.Calculator.title') }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ $t('ZakatPage.Calculator.title2') }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-col>
      <v-text-field
        v-model="inputSum"
        label="Сумма ваших денег ₽"
        filled
        rounded
        type="Number"
        dense
      />
    </v-col>

    <v-list-item>
      <v-list-item-title>{{ $t('ZakatPage.Calculator.nisabtoday') }} {{ updatedate }}</v-list-item-title>
      <v-list-item-title class="text-right">
        {{ nisabSum }} ₽
      </v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-subtitle>{{ $t('ZakatPage.Calculator.bank') }}</v-list-item-subtitle>
      <v-list-item-subtitle class="text-right">
        {{ goldPrice }} ₽
      </v-list-item-subtitle>
    </v-list-item>

    <v-list-item v-if="nisabSum<=inputSum">
      <v-list-item-title>{{ $t('ZakatPage.Calculator.yourzakat') }}</v-list-item-title>
      <v-list-item-title class="text-right">
        {{ 0.025*inputSum }}
      </v-list-item-title>
    </v-list-item>
    <v-col v-if="nisabSum<=inputSum" class="text-center">
      <v-btn rounded color="primary">
        {{ $t('ZakatPage.Calculator.pay') }}
      </v-btn>
    </v-col>
    <v-list-item v-else>
      <v-list-item-title>{{ $t('ZakatPage.Calculator.nopay') }}</v-list-item-title>
    </v-list-item>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return { goldPrice: 0, nisabSum: 0, inputSum: null, updatedate: '' };
  },
  async mounted () {
    let now = new Date();
    const dayOfWeek = now.getDay();
    if (dayOfWeek > 5) { // weekend service is not available
      now = new Date(Date.now() - 86400000 * (dayOfWeek - 5));
    }
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const today = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    const url = ` https://cors-anywhere.herokuapp.com/http://www.cbr.ru/scripts/xml_metall.asp?date_req1=${today}&date_req2=${today}`;
    const result = await fetch(url)
      .then(x => x.text());
    const parser = new DOMParser().parseFromString(result, 'text/xml');
    this.goldPrice = Number.parseFloat(parser.evaluate('//Metall/Record[@Code=1]/Sell', parser, null, XPathResult.STRING_TYPE, null).stringValue.replace(',', '.'));
    this.nisabSum = 84.8 * this.goldPrice;
    this.updatedate = today;
  },
});
</script>
