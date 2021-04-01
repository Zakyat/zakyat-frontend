<template>
  <div class="mt-5">
    <h2>Ваши подписки</h2>

    <v-row
      align="center"
      class="pl-5"
    >
      <v-col><p>Сумма</p></v-col>
      <v-col><p>Период</p></v-col>
      <v-col><p>Назначение платежа</p></v-col>
      <v-col><p>Способ платежа</p></v-col>
      <v-col></v-col>
    </v-row>
    <v-card
      class="subscription pr-5 py-0 mb-3"
      flat
      rounded
      outlined
      v-for="sub in subs"
      :key="sub.id"
    >
      <div class="green"></div>
      <v-row
        align="center"
        class="pl-5"
      >
<!--        <v-col cols="auto" class="py-0"></v-col>-->
        <v-col>{{ sub.amount }}<b>$</b></v-col>
        <v-col>{{ sub.type }}</v-col>
        <v-col class="">
          {{ sub.campaign.title }}
          <br>
          <p class="sbor">
            {{ sub.campaign.title }}
          </p>
        </v-col>
        <v-col>Master card *2324</v-col>
        <v-col>
          <v-btn depressed text  class="change-avatar">
            Отменить подписку
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Subscriptions',
  props: {
    subs: {
      type: Array,
      required: true,
    },
  },
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

.subscription {
  border-radius: 10px !important;
  display: flex;
}

.green {
  background-color: #1c6739;
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
