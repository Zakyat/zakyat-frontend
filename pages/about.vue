<template>
  <v-container class="mt-10">
    <v-card
      flat
      class="pa-7 about-card mb-10"
    >
      <v-row>
        <v-col>
          <h2>
            {{ $t('about.foundation_tasks') }}
          </h2>
          <p class="pt-3">{{siteSettings.fondInformation}}</p>
        </v-col>
        <v-col>
          <v-img
            style="border-radius: 10px;"
            :src="require('@/assets/images/about/cover.png')"
          />
        </v-col>
      </v-row>
      <Employees v-if="employees" :employees="employees" class="mt-7" />
      <Certificates :certificates="certificates" />
      <Documents class="mt-5" />
      <Contacts />
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';
import Employees from '@/components/about/Employees.vue';
import Certificates from '@/components/about/Сertificates.vue';
import Documents from '@/components/about/Documents.vue';
import Contacts from '@/components/about/Contacts.vue';

export default Vue.extend({
  components: {
    Employees,
    Documents,
    Certificates,
    Contacts,
  },
  head: {
    title: `О Фонде | Благотворительный фонд "Закят"`,
  },
  apollo: {
    employees: {
      query: gql`
        query {
          employees {
            id,
            fullName,
            phoneNumber,
            photo,
            bio,
            position,
          }
        }
      `,
    },
    siteSettings: gql`query{
      siteSettings {
        fondInformation,
      }
    }`,
  },
  data () {
    return {
      siteSettings: '',
      certificates: [
        {
          img: require('@/assets/about_us_files/registration_certificate.jpg'),
          name: 'Регистрации',
        },
        {
          img: require('@/assets/about_us_files/certificate_of_accounting.jpg'),
          name: 'Постановки на учет',
        },
        {
          img: require('@/assets/about_us_files/egrul_certificate.jpg'),
          name: 'Внесении в ЕГРЮЛ',
        },
      ],
      employees: [],
    };
  },
});
</script>

<style>
.about-card {
  border-radius: 10px !important;
}
</style>
