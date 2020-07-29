<template>
  <v-container>
    <v-card
      flat
      rounded
      color="white"
      class="pa-7"
    >
      <v-row>
        <v-col>
          <h2>
            {{ $t('about.foundation_tasks') }}
          </h2>
          <p class="pt-3">
            {{ $t('about.foundation_about_text') }}
          </p>
        </v-col>
        <v-col>
          <v-img
            rounded
            class="main-img"
            :src="require('@/assets/images/about/102113 1.png')"
          />
        </v-col>
      </v-row>
      <Employees
        class="mt-7"
        :employees="employees"
      />
      <Certificates
        :certificates="certificates"
      />
      <Documents />
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Employees from '@/components/about/Employees.vue';
import Certificates from '@/components/about/Сertificates.vue';
import Documents from '@/components/about/Documents.vue';

export default Vue.extend({
  layout: 'grey',
  components: {
    Employees,
    Documents,
    Certificates,
  },
  data () {
    return {
      employees: [
        {
          id: 1,
          img: require('@/assets/images/about/102113 1.png'),
          name: 'Марданов Булат Раифович',
          position: 'Генеральный директор БФ «Закят»',
          duties: '1. Распоряжание средствами фонда. 2. Формирование задач, поставленных перед фондом и осуществление организации их решений. 3. Представление интересов фонда при взаимодействии с юридическими и физическими лицами.',
          phone: '+ 7 (843) 225-33-22',
        },
        {
          id: 2,
          img: require('@/assets/images/about/102113 1.png'),
          name: 'Марданов Булат Раифович',
          position: 'Генеральный директор БФ «Закят»',
          duties: '1. Распоряжание средствами фонда. 2. Формирование задач, поставленных перед фондом и осуществление организации их решений. 3. Представление интересов фонда при взаимодействии с юридическими и физическими лицами.',
          phone: '+ 7 (843) 225-33-22',
        },
        {
          id: 3,
          img: require('@/assets/images/about/102113 1.png'),
          name: 'Марданов Булат Раифович',
          position: 'Генеральный директор БФ «Закят»',
          duties: '1. Распоряжание средствами фонда. 2. Формирование задач, поставленных перед фондом и осуществление организации их решений. 3. Представление интересов фонда при взаимодействии с юридическими и физическими лицами.',
          phone: '+ 7 (843) 225-33-22',
        },
        {
          id: 4,
          img: require('@/assets/images/about/102113 1.png'),
          name: 'Марданов Булат Раифович',
          position: 'Генеральный директор БФ «Закят»',
          duties: '1. Распоряжание средствами фонда. 2. Формирование задач, поставленных перед фондом и осуществление организации их решений. 3. Представление интересов фонда при взаимодействии с юридическими и физическими лицами.',
          phone: '+ 7 (843) 225-33-22',
        },
        {
          id: 5,
          img: require('@/assets/images/about/102113 1.png'),
          name: 'Марданов Булат Раифович',
          position: 'Генеральный директор БФ «Закят»',
          duties: '1. Распоряжание средствами фонда. 2. Формирование задач, поставленных перед фондом и осуществление организации их решений. 3. Представление интересов фонда при взаимодействии с юридическими и физическими лицами.',
          phone: '+ 7 (843) 225-33-22',
        },
      ],
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
    };
  },
});
</script>

<style scoped>
.main-img {
  border-radius: 10px;
}
</style>
