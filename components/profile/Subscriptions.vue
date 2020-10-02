<template>
  <div class="mt-5">
    <h2>Ваши подписки</h2>

    <v-simple-table>
      <template>
        <thead>
          <tr>
            <th>Сумма</th>
            <th>Период</th>
            <th>Назначение платежа</th>
            <th>Способ платежа</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10<b>$</b></td>
            <td>Ежедневно</td>
            <td>
              Фаттахова Камиля
              <br>
              <p class="sbor">
                сбор №23
              </p>
            </td>
            <td>Master card *2324</td>
            <td>
              <v-btn
                text
                rounded
                color="red"
                style="float: right;"
                small
              >
                <!--        {{ $t('charity.contacts.resumeBtn') }}-->
                Отменить подписку
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'Subscriptions',
};
</script>

<style scoped>
.sbor {
  padding: 0;
  margin: 0;
  color: #7f828b;
}
</style>
