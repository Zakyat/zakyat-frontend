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
              <nuxt-link to="#" class="change-avatar">
                Отменить подписку
              </nuxt-link>
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
h2 {
  font-size: 28px;
}

.change-avatar {
  color: #ac0000;
  float: right;
  text-decoration: none;
}

.sbor {
  padding: 0;
  margin: 0;
  color: #7f828b;
}
</style>
