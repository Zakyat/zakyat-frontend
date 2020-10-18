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
          <!--          <p class="pt-3">-->
          <!--            {{ $t('about.foundation_about_text') }}-->
          <!--          </p>-->
          <p class="pt-3">
            Благотворительный фонд «Закят» учрежден Централизованной Религиозной Организацией Духовного управления мусульман в Республике Татарстан в 1998 году. БФ «Закят» занимается сбором и распределением Закята и Садака в Республике Татарстан. Деятельность по сбору Закята и Садака осуществляют специалисты фонда. Распределение Закята и Садака осуществляется по решению комиссии. Консультации по осуществлению деятельности фонда оказывает Совет Улемов ЦРО-ДУМ РТ.
          </p>
          <p>
            БФ «Закят» занимается оказанием помощи самым незащищенным слоям населения: многодетным, малоимущим семьям, попавшим в трудную жизненную ситуацию; сиротам и одиноким пожилым людям. Так же фонд занимается сбором средств и помогает в оплате лечения тяжелобольным детям и взрослым.
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
          position: 'Генеральный директор БФ «Закят»',
          duties: [
            'Распоряжание средствами фонда.',
            'Формирование задач, поставленных перед фондом и осуществление организации их решений.',
            'Представление интересов фонда при взаимодействии с юридическими и физическими лицами.',
          ],
          phone: '+ 7 (843) 225-33-22',
        },
        {
          id: 2,
          img: require('@/assets/images/about/Ilnur_Mahmutovich.png'),
          name: 'Альметов Ильнур Махмутович',
          position: 'Заместитель генерального директора',
          duties: [
            'Распоряжание средствами фонда.',
            'Формирование задач, поставленных перед фондом и осуществление организации их решений.',
            'Представление интересов фонда при взаимодействии с юридическими и физическими лицами.',
          ],
          phone: '+ 7 (843) 225-33-22',
        },
        {
          id: 3,
          img: require('@/assets/images/about/Maya_Atamuratovna.png'),
          name: 'Бурганова Майя Атамуратовна',
          position: 'Ведущий специалист отдела благотворительных программ',
          duties: [
            'Распоряжание средствами фонда.',
            'Формирование задач, поставленных перед фондом и осуществление организации их решений.',
            'Представление интересов фонда при взаимодействии с юридическими и физическими лицами.',
          ],
          phone: '+ 7 (843) 225-33-22',
        },
        {
          id: 4,
          img: require('@/assets/images/about/Guzeliya_Galimzyanova.png'),
          name: 'Валиуллова Гузелия Галимзяновна',
          position: 'Главный специалист отдела благотворительных программ.',
          duties: [
            'Распоряжание средствами фонда.',
            'Формирование задач, поставленных перед фондом и осуществление организации их решений.',
            'Представление интересов фонда при взаимодействии с юридическими и физическими лицами.',
          ],
          phone: '+ 7 (843) 225-33-22',
        },
        {
          id: 5,
          img: require('@/assets/images/about/Abdurrahman_Radikovich.png'),
          name: 'Дюсьметов Абдуррахман Радикович',
          position: 'Ведущий специалист отдела благотворительных программ',
          duties: [
            'Распоряжание средствами фонда.',
            'Формирование задач, поставленных перед фондом и осуществление организации их решений.',
            'Представление интересов фонда при взаимодействии с юридическими и физическими лицами.',
          ],
          phone: '+ 7 (843) 225-33-22',
        },
        {
          id: 6,
          img: require('@/assets/images/about/Ravziya_Hamedovna.png'),
          name: 'Айсина Рявзия Хамедовна',
          position: 'Специалист пункта сбора и раздачи одежды и предметов первой необходимости',
          duties: [
            'Распоряжание средствами фонда.',
            'Формирование задач, поставленных перед фондом и осуществление организации их решений.',
            'Представление интересов фонда при взаимодействии с юридическими и физическими лицами.',
          ],
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
