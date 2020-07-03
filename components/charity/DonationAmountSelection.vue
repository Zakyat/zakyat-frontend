<template>
  <v-row
    class="mt-12"
  >
    <v-row class="px-6">
      <v-tabs
        v-model="tab"
        centered
        grow
        hide-slider
        class="donation-tabs pa-1"
      >
        <v-tab
          v-for="item in donationTabs"
          :key="item"
          class="donation-tab"
          active-class="donation-tab-primary"
        >
          {{ item.donation }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in donationTabs"
          :key="item"
        >
          <v-card flat>
            <v-card-text>
              {{ item.content }}
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-row>
    <v-row class="px-3">
      <v-col
        cols="12"
        md="3"
      >
        <v-text-field
          rounded
          dense
          hide-details
          :placeholder="$t('charity.donationAmountSelection.amountInput.')"
          outlined
          type="number"
          min="1"
        />
      </v-col>
      <v-col
        cols="12"
        md="9"
      >
        <v-radio-group
          row
          dense
          hide-details
          class="my-0 py-0 amounts"
        >
          <v-radio
            v-for="a in amounts"
            :key="a"
            :label="`${a} ₽`"
            :value="a"
            class="pa-2"
          />
        </v-radio-group>
      </v-col>
    </v-row>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DonationAmountSelection',
  data () {
    return {
      tab: null,
      donationTabs: [
        {
          donation: 'Разовое пожертвование',
          content: 'Один раз с указанного вами способа оплаты списывается сумма пожертвования. В любой момент вы сможете отключить подписку в личном кабинете. Как только нуждающийся наберет необходимую сумму, ваше ежедневное пожертвование будет поступать на счет следующего нуждающегося по списку.',
        },
        {
          donation: 'Ежедневное пожертвование',
          content: 'Раз в день с указанного вами способа оплаты списывается сумма пожертвования. В любой момент вы сможете отключить подписку в личном кабинете. Как только нуждающийся наберет необходимую сумму, ваше ежедневное пожертвование будет поступать на счет следующего нуждающегося по списку.',
        },
        {
          donation: 'Ежемесячное пожертвование',
          content: 'Раз в месяц с указанного вами способа оплаты списывается сумма пожертвования. В любой момент вы сможете отключить подписку в личном кабинете. Как только нуждающийся наберет необходимую сумму, ваше ежедневное пожертвование будет поступать на счет следующего нуждающегося по списку.',
        },
      ],
      amounts: [1, 5, 10, 50, 100, 200, 300, 500],
    };
  },
});
</script>

<style scoped>
.amounts {
  border: 1px solid grey;
  border-radius: 25px;
}

.donation-tabs {
  border: 1px solid grey;
  border-radius: 30px;
}

.donation-tab
{
  border-radius: 30px !important;
}

.donation-tab-primary {
  background-color: #00ac00;
  color: white;
}
</style>
