<template>
  <div class="mt-5">
    <h2>Мои пожертвования</h2>

    <v-simple-table>
      <template>
        <thead>
          <tr>
            <th>Статус пожертвования</th>
            <th>Тип пожертвования</th>
            <th>Сумма</th>
            <th>Дата</th>
            <th>Назначение платежа</th>
            <th>Способ платежа</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in 5"
            :key="item"
          >
            <td>В обработке</td>
            <td>Садака</td>
            <td>10<b>$</b></td>
            <td>01.12.2019</td>
            <td>
              Фаттахова Камиля
              <br>
              <p class="sbor">
                сбор №23
              </p>
            </td>
            <td>Master card *2324</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'MyDonations',
};
</script>

<style scoped>
.sbor {
  padding: 0;
  margin: 0;
  color: #7f828b;
}
</style>
