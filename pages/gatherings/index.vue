<template>
  <div class="gatherings-wrapper mb-10">
    <h1 class="mt-12 mb-8">
      Сборы
    </h1>

    <v-card
      v-for="(gathering, i) in gatherings"
      :key="i"
      class="gathering"
      flat
    >
      <v-container class="gatheringContent">
        <v-row class="mt-n6" align="center">
          <v-col cols="3" class="imageContainer pt-8">
            <img :src="gathering.img" style="border-radius: 15px;">
          </v-col>
          <v-col>
            <v-row class="mt-n3">
              <v-col>
                <v-card-title style="font-weight: bold; font-size: 30px;">
                  {{ gathering.title }}
                </v-card-title>
                <v-card-subtitle style="font-size: 16px; color: black;">
                  {{ gathering.description }}
                </v-card-subtitle>
              </v-col>
              <v-col cols="auto">
                <v-progress-circular
                  rotate="-90"
                  color="primary"
                  background-color="#DADADA"
                  size="60"
                  class="font-weight-bold title"
                  :value="100*gathering.collected/gathering.required"
                >
                  {{ Math.floor(100 * gathering.collected / gathering.required) }}%
                </v-progress-circular>
              </v-col>
            </v-row>

            <v-row class="mt-n10">
              <v-col>
                <v-card-text style="font-size: 14px">
                  {{ gathering.info }}
                </v-card-text>
              </v-col>
            </v-row>

            <v-row justify="space-around" class="mt-n8 pl-2">
              <v-col cols="9">
                <v-row justify="space-between">
                  <v-col class="pb-1">
                    <p class="subtitle mb-0 checkpoint">
                      {{ $t('home.slideshow.collected') }}
                    </p>
                    <p class="font-weight-bold mb-0">
                      {{ gathering.collected | rubles }}
                    </p>
                  </v-col>
                  <v-spacer />
                  <v-col class="pb-1">
                    <p class="subtitle mb-0 checkpoint">
                      {{ $t('home.slideshow.remaining') }}
                    </p>
                    <p class="font-weight-bold mb-0">
                      {{ gathering.required - gathering.collected | rubles }}
                    </p>
                  </v-col>
                  <v-spacer />
                  <v-col class="pb-1 text-right">
                    <p class="subtitle mb-0 checkpoint">
                      {{ $t('home.slideshow.required') }}
                    </p>
                    <p class="font-weight-bold mb-0">
                      {{ gathering.required | rubles }}
                    </p>
                  </v-col>
                </v-row>
                <v-progress-linear
                  height="9"
                  rounded
                  background-color="#DADADA"
                  :value="100*gathering.collected/gathering.required"
                />
              </v-col>
              <v-col cols="auto" class="buttonContainer">
                <v-btn
                  rounded
                  depressed
                  dark
                  color="#00AC00"
                  class="text-none donate"
                  style="font-weight: normal"
                >
                  {{ $t('home.slideshow.donate') }}
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      gatherings: [
        {
          img: require('@/assets/images/gatherings/gathering1.png'),
          title: 'Бурганова Альфия, 16 лет',
          description: 'Идиопатический прогрессирующий сколиоз 4-й степени, спасет операция',
          info: 'Альфие 16 лет. В 9 месяцев ей поставили диагноз — ДЦП. Врачи сказали, что' +
                ' ходить она не сможет. Никогда. Но в 2 годика она сделала первые робкие шаги.' +
                ' В первый класс она пошла в обычную школу. Ей было очень тяжело, ее пальчики не ' +
                'слушались и не получалось писать красивые буквы. Но она настойчиво старалась писать ' +
                'и добилась каллиграфического почерка. Альфия научилась играть на курае и даже заняла ' +
                'второе место в международном конкурсе. К сожалению, болезнь' +
                'не отступает до конца и она вынуждена проходить неприятные процедуры. ' +
                'Сумма к сбору на лечение Альфии составляет 500 тысяч 500 рублей.',
          required: 500_500,
          collected: 65_065,
        },
        {
          img: require('@/assets/images/gatherings/gathering2.png'),
          title: 'Садыков Амирхан, 11 лет',
          description: 'ДЦП',
          info: 'Амирхан — второй долгожданный ребенок в семье. Родился с помощью кесарева ' +
            'сечения на 38 неделе. Уже внутриутробно были выявлено — полное удвоение слева почки ' +
            'и мочевых путей, гидронефротическая трансформация левой почки, резидуально-органическая ' +
            'паталогия ЦНС. Не смотря на бесконечные лечения, состояние Амирхана ухудшалось, стало ' +
            'очень высоко подниматься артериальное давление. В 2014 году была удалена часть левой почки.' +
            ' В семье есть старший ребенок с аналогичными паталогиями. В ходе обследования у генетика ' +
            'Амирхану был поставлен еще один диагноз — сочетанные врожденные аномалии развития.' +
            'Сбор закрыт — 670 000 рублей.',
          required: 670_000,
          collected: 335_000,
        },
        {
          img: require('@/assets/images/gatherings/gathering1.png'),
          title: 'Бурганова Альфия, 16 лет',
          description: 'Идиопатический прогрессирующий сколиоз 4-й степени, спасет операция',
          info: 'Альфие 16 лет. В 9 месяцев ей поставили диагноз — ДЦП. Врачи сказали, что' +
            ' ходить она не сможет. Никогда. Но в 2 годика она сделала первые робкие шаги.' +
            ' В первый класс она пошла в обычную школу. Ей было очень тяжело, ее пальчики не ' +
            'слушались и не получалось писать красивые буквы. Но она настойчиво старалась писать ' +
            'и добилась каллиграфического почерка. Альфия научилась играть на курае и даже заняла ' +
            'второе место в международном конкурсе. К сожалению, болезнь' +
            'не отступает до конца и она вынуждена проходить неприятные процедуры. ' +
            'Сумма к сбору на лечение Альфии составляет 500 тысяч 500 рублей.',
          required: 500_500,
          collected: 65_065,
        },
        {
          img: require('@/assets/images/gatherings/gathering2.png'),
          title: 'Садыков Амирхан, 11 лет',
          description: 'ДЦП',
          info: 'Амирхан — второй долгожданный ребенок в семье. Родился с помощью кесарева ' +
            'сечения на 38 неделе. Уже внутриутробно были выявлено — полное удвоение слева почки ' +
            'и мочевых путей, гидронефротическая трансформация левой почки, резидуально-органическая ' +
            'паталогия ЦНС. Не смотря на бесконечные лечения, состояние Амирхана ухудшалось, стало ' +
            'очень высоко подниматься артериальное давление. В 2014 году была удалена часть левой почки.' +
            ' В семье есть старший ребенок с аналогичными паталогиями. В ходе обследования у генетика ' +
            'Амирхану был поставлен еще один диагноз — сочетанные врожденные аномалии развития.' +
            'Сбор закрыт — 670 000 рублей.',
          required: 670_000,
          collected: 335_000,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
  .gatherings-wrapper {
    width: 1170px;
    margin: 0 auto;
  }

  .gathering {
    margin-bottom: 30px;
    border-radius: 15px !important;
  }

  .gatheringContent {
    padding: 30px;
  }

  .imageContainer {
    display: grid;
    place-items: center;
    padding-top: 25px;
  }

  .buttonContainer {
    display: grid;
    place-items: end;
  }

  .checkpoint {
    color: gray;
    font-size: 14px;
  }
</style>
