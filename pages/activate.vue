<template>
  <v-layout white class="payment-layout">
    <v-container>
      <div class="payment-success">
        <v-img width="250px" :src="require('@/assets/images/payment/payment-success.png')" alt="successImg" />
        <div class="text-center">
          <h1>Спасибо!</h1>
          <p class="my-0">
            Ваша почта успешно подтверждена!
          </p>
        </div>
      </div>
    </v-container>
  </v-layout>
</template>

<script>
  import gql from "graphql-tag";

  export default {
    name: "activate",
    mounted() {
      this.$apollo.mutate({
        mutation: gql`
          mutation ($token: String!, $uidb64: String!) {
            activate (token: $token, uidb64: $uidb64) {
              ok
              errors
            }
          }
        `,
        variables: {
          token: this.$route.query.token,
          uidb64: this.$route.query.uidb64,
        },
      });
    }
  }
</script>

<style scoped>
  .payment-layout {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .payment-success {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

