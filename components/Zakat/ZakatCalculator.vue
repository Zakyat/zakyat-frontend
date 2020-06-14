<template>
  <div>
    <v-list-item-content two-line>
      <v-list-item-title class="headline font-weight-black">
        {{ $t('ZakatPage.Calculator.title') }}
      </v-list-item-title>
      <v-list-item-subtitle class="font-weight-black">
        {{ $t('ZakatPage.Calculator.title2') }}
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-content>
      <v-text-field
        v-model="inputSum"
        label="Сумма ваших денег ₽"
        filled
        rounded
        type="Number"
        dense
        outlined
      />
    </v-list-item-content>
    <v-list-item>
      <v-list-item-title class="font-weight-black">
        {{ $t('ZakatPage.Calculator.nisabtoday') }} {{ updatedate }}
      </v-list-item-title>
      <v-list-item-title class="text-right font-weight-black">
        {{ nisabSum }} ₽
      </v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title class="green--text">
        {{ $t('ZakatPage.Calculator.bank') }}
      </v-list-item-title>
      <v-list-item-subtitle class="text-right">
        {{ $t('ZakatPage.Calculator.gold') }}
      </v-list-item-subtitle>
    </v-list-item>
    <div v-if="nisabSum<=inputSum">
      <v-list-item>
        <v-list-item-title class="font-weight-black">
          {{ $t('ZakatPage.Calculator.yourzakat') }}
        </v-list-item-title>
        <v-list-item-title class="text-right font-weight-black">
          {{ 0.025*inputSum }} ₽
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-subtitle>
          {{ $t('ZakatPage.Calculator.description') }}
        </v-list-item-subtitle>
      </v-list-item>
      <v-btn rounded block color="primary">
        {{ $t('ZakatPage.Calculator.pay') }}
      </v-btn>
    </div>
    <div v-else>
      <v-list-item>
        <v-list-item-title class="font-weight-black">
          {{ $t('ZakatPage.Calculator.nopay') }}
        </v-list-item-title>
      </v-list-item>
      <v-btn rounded disabled block color="primary">
        {{ $t('ZakatPage.Calculator.pay') }}
      </v-btn>
    </div>
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
    if (dayOfWeek === 6) { // weekend service is not available
      now = new Date(Date.now() - 86400000);
    }
    if (dayOfWeek === 0) { // weekend service is not available
      now = new Date(Date.now() - 86400000 * 2);
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
