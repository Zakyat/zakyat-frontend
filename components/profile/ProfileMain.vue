<template>
  <v-row
    justify="space-between"
  >
    <v-col
      cols="12"
      md="3"
      class="pt-0"
    >
      <v-img
        width="202"
        height="202"
        class="avatar"
        style="margin: 0 auto;"
        :src="require('@/assets/images/banners/3.png')"
      />
      <v-row
        justify="center"
        class="mt-5"
      >
        <nuxt-link to="#" class="change-avatar">
          Изменить фото
        </nuxt-link>
      </v-row>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-form>
        <v-text-field
          :placeholder="firstName ? firstName : $t('charity.contacts.name')"
          v-model="user.firstName"
          rounded
          flat
          outlined
          color="grey"
          hide-details
          dense
        />
        <v-text-field
          :placeholder="lastName ? lastName : $t('charity.contacts.lastName')"
          v-model="user.lastName"
          rounded
          flat
          outlined
          color="grey"
          hide-details
          dense
          class="mt-3"
        />
        <v-text-field
          :placeholder="email ? email : $t('charity.contacts.email')"
          v-model="user.email"
          rounded
          flat
          outlined
          color="grey"
          hide-details
          dense
          class="mt-3"
        />
        <v-btn
          rounded
          color="primary"
          class="mt-5"
          width="184"
        >
          Сменить пароль
        </v-btn>
      </v-form>
    </v-col>
    <v-col
      cols="12"
      md="3"
      class="apply-changes"
    >
      <v-btn text color="primary" class="change" @click="updateUser()">
        Сохраненить <br>
        изменения
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'ProfileMain',
  props: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      ok: '',
      errors: [],
      user: {
        firstName: '',
        lastName: '',
        email: '',
      },
    };
  },
  methods: {
    updateUser () {
      this.$apollo.mutate({
        mutation: gql`
          mutation updateUser ($firstName: String!, $email: String!) {
            updateUser(firstName: $firstName, email: $email){
              ok,
              errors
              user {
                firstName
                lastName
                email
              }
            }
          }
        `,
        variables: {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
        },
        update: (cache, result) => {
          this.firstName = result.data.updateUser.firstName;
          this.lastName = result.data.updateUser.lastName;
          this.email = result.data.updateUser.email;
        },
      });
    },
  },
};
</script>

<style scoped>
.apply-changes {
  display: flex;
  justify-content: center;
}

.change {
  text-decoration: none;
}

.change-avatar {
  text-decoration: none;
}

.avatar {
  border-radius: 200px;
}
</style>
