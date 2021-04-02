<template>
  <div class="mt-5">
    <v-row>
      <v-col
        cols="12"
        md="8"
      >
        <h2>Мои пожертвования</h2>
      </v-col>
      <v-col>
        <v-text-field
          placeholder="Сумма или номер проекта"
          append-icon="mdi-magnify"
          rounded
          dense
          flat
          outlined
          hide-details
          color="black"
        />
      </v-col>
    </v-row>
<!--    <v-simple-table>-->
<!--      <template>-->
<!--        <thead>-->
<!--          <tr>-->
<!--            <th>Статус пожертвования</th>-->
<!--            <th>Тип пожертвования</th>-->
<!--            <th>Сумма</th>-->
<!--            <th>Дата</th>-->
<!--            <th>Назначение платежа</th>-->
<!--            <th>Способ платежа</th>-->
<!--            <th> </th>-->
<!--          </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--          <tr>-->
<!--            <td>В обработке</td>-->
<!--            <td>Садака</td>-->
<!--            <td>10<b>$</b></td>-->
<!--            <td>01.12.2019</td>-->
<!--            <td>-->
<!--              Фаттахова Камиля-->
<!--              <br>-->
<!--              <p class="sbor">-->
<!--                сбор №23-->
<!--              </p>-->
<!--            </td>-->
<!--            <td>Master card *2324</td>-->
<!--          </tr>-->
<!--        </tbody>-->
<!--      </template>-->
<!--    </v-simple-table>-->
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
      v-for="item in 2"
      :key="item"
    >
      <div class="green"></div>
      <v-row
        align="center"
        class="pl-5"
      >
        <!--        <v-col cols="auto" class="py-0"></v-col>-->
        <v-col>Получено</v-col>
        <v-col>Садака</v-col>
        <v-col>10<b>$</b></v-col>
        <v-col>01.12.2019</v-col>
        <v-col class="">
          Фаттахова Камиля
          <br>
          <p class="sbor">
            сбор №23
          </p>
        </v-col>
        <v-col>Master card *2324</v-col>
      </v-row>
    </v-card>
    <v-card
      class="donation pr-5 py-0 mb-3"
      flat
      rounded
      outlined
      v-for="item in 1"
      :key="item"
    >
      <div class="grey"></div>
      <v-row
        align="center"
        class="pl-5"
      >
        <v-col>В обработке</v-col>
        <v-col>Садака</v-col>
        <v-col>10<b>$</b></v-col>
        <v-col>01.12.2019</v-col>
        <v-col class="">
          Фаттахова Камиля
          <br>
          <p class="sbor">
            сбор №23
          </p>
        </v-col>
        <v-col>Master card *2324</v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'MyDonations',
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
