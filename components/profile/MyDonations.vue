<template>
  <div class="mt-5" v-if="donations">
    <v-row>
      <v-col
        cols="12"
        md="8"
      >
        <h2>Мои пожертвования</h2>
      </v-col>
<!--      <v-col>-->
<!--        <v-text-field-->
<!--          placeholder="Сумма или номер проекта"-->
<!--          append-icon="mdi-magnify"-->
<!--          rounded-->
<!--          dense-->
<!--          flat-->
<!--          outlined-->
<!--          hide-details-->
<!--          color="black"-->
<!--        />-->
<!--      </v-col>-->
    </v-row>
    <div v-if="donations.length > 0">
      <v-row
        align="center"
        class="pl-5"
      >
        <v-col><p>Статус пожертвования</p></v-col>
        <v-col><p>Тип пожертвования</p></v-col>
        <v-col><p>Сумма</p></v-col>
        <v-col><p>Дата</p></v-col>
        <v-col><p>Назначение платежа</p></v-col>
        <v-col><p>Способ платежа</p></v-col>
      </v-row>
      <v-card
        class="donation pr-5 py-0 mb-3"
        flat
        rounded
        outlined
        v-for="donation in donations"
        :key="donation.id"
      >

        <div v-if="donation.status === 'A_2'" class="green"></div>
        <div v-else class="grey"></div>

        <v-row
          align="center"
          class="pl-5"
        >
          <!--        <v-col cols="auto" class="py-0"></v-col>-->
          <v-col v-if="donation.status">{{ donation.status === 'A_2' ? 'Получено' : 'В Обработке' }}</v-col>
          <v-col v-else>-</v-col>
          <v-col>{{ donation.transactionType }}</v-col>
          <v-col>{{ donation.amount }}<b>$</b></v-col>
          <v-col>{{ localeDate(donation.createAt )}}</v-col>
          <v-col v-if="donation.campaign">
            {{ donation.campaign.title }}
            <br>
            <p class="sbor">
              {{ donation.campaign.title }}
            </p>
          </v-col>
          <v-col v-else>
            Без сбора
            <br>
            <p class="sbor">
              -
            </p>
          </v-col>
          <v-col>{{ donation.paymentType === 'A_0' ? 'Карта' : (donation.paymentType === 'A_1' ? 'Наличные' : 'Другое') }}</v-col>
        </v-row>
      </v-card>
    </div>
    <div v-else>
      Пожертвований пока нет
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyDonations',
  props: {
    donations: {
      type: Array,
      required: true,
    },
  },
  methods: {
    localeDate (stringDate) {
      const date = new Date(stringDate).toLocaleDateString(this.$i18n.locale, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
      return date;
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 28px;
}

.sbor {
  padding: 0;
  margin: 0;
  color: #7f828b;
}

.donation {
  border-radius: 10px !important;
  display: flex;
}

.green {
  background-color: #1c6739;
  width: 5px;
  border-radius: 10px 0 0 10px !important;
}

.grey {
  background-color: #7f828b;
  width: 5px;
  border-radius: 10px 0 0 10px !important;
}

p {
  padding: 0;
  margin: 0;
  color: #7f828b;
  font-size: 12px;
}
</style>
