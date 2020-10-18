<template>
  <v-container class="mt-10">
    <v-card
      flat
      rounded
      class="pa-7"
    >
      <v-row>
        <v-col>
          <h2>
            {{ $t('about.foundation_tasks') }}
          </h2>
          <p class="pt-3">
            {{ $t('about.paragraph1') }}
          </p>
          <p>
            {{ $t('about.paragraph2') }}
          </p>
        </v-col>
        <v-col>
          <v-img
            style="border-radius: 10px;"
            :src="require('@/assets/images/about/cover.png')"
          />
        </v-col>
      </v-row>
      <Employees :employees="employees" class="mt-7" />
      <Certificates :certificates="certificates" />
      <Documents />
      <Contacts />
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
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
  data () {
    return {
      employees: [
        {
          id: 1,
          img: require('@/assets/images/about/Bulat_Raifovich.png'),
          name: 'Марданов Булат Раифович',
          position: this.$t('about.positions.general_director'),
          duties: [
            'Распоряжание средствами фонда.',
            'Формирование задач, поставленных перед фондом и осуществление организации их решений.',
            'Представление интересов фонда при взаимодействии с юридическими и физическими лицами.',
          ],
          phone: '+7 (843) 225-33-22',
        },
        {
          id: 2,
          img: require('@/assets/images/about/Ilnur_Mahmutovich.png'),
          name: 'Альметов Ильнур Махмутович',
          position: this.$t('about.positions.deputy_director'),
          duties: [
            'Инкассация ящиков для сбора средств.',
            'Организация и ведение проекта "Накорми нуждающегося.',
          ],
          phone: '+7 (843) 590-19-75',
        },
        {
          id: 3,
          img: require('@/assets/images/about/Maya_Atamuratovna.png'),
          name: 'Бурганова Майя Атамуратовна',
          position: this.$t('about.positions.charity_leader'),
          duties: [
            'Взаимодействие с нуждающимися. Организация сбора средств и необходимых документов.',
            'Организация и раздача мясной продукции, продуктовых наборов.',
            'Оказание духовной поддержки пациентам Первого детского хосписа и Наркологического диспансера.',
            'Организация мероприятий.',
          ],
          phone: '+7 (843) 590-27-50',
        },
        {
          id: 4,
          img: require('@/assets/images/about/Guzeliya_Galimzyanova.png'),
          name: 'Валиуллова Гузелия Галимзяновна',
          position: this.$t('about.positions.chief_specialist'),
          duties: [
            'Получение и ведение грантов.',
            'Учёт и ведение документации фонда.',
          ],
          phone: '+7 (843) 590-27-65',
        },
        {
          id: 5,
          img: require('@/assets/images/about/Abdurrahman_Radikovich.png'),
          name: 'Дюсьметов Абдуррахман Радикович',
          position: this.$t('about.positions.charity_leader'),
          duties: [
            'Сбор и размещение новостей и отчётности на сайте и в социальных сетях.',
            'Организация сбора и предоставление отчёта в проекте "Добро mail".',
            'Выступление на радио и ТВ.',
          ],
          phone: '+7 (843) 590-27-65',
        },
        {
          id: 6,
          img: require('@/assets/images/about/Ravziya_Hamedovna.png'),
          name: 'Айсина Рявзия Хамедовна',
          position: this.$t('about.positions.collection_specialist'),
          duties: [
            'Сбор и раздача одежды, обуви и предметов первой необходимости нуждающимся.',
          ],
          phone: '+7 (843) 590-19-24',
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
