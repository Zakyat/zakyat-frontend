<template>
  <div>
    <v-card
      flat
      class="news-card"
      style="border-radius: 10px;"
    >
      <v-row>
        <v-col
          cols="4"
          md="4"
          class="card-img-col"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
            width="300px"
            style="border-radius: 10px;"
          ></v-img>
        </v-col>

        <v-col
          cols="8"
          md="8"
          class=""
        >
          <v-row
            class="flex-column"
          >
            <v-col class="news-card-desc flex-column flex-end" style="padding: 0;">
              <v-card-title class="news-card-title">Вкусности для бездомных</v-card-title>
              <v-card-text class="news-card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium dignissimos
                exercitationem ullam? A accusantium animi assumenda commodi delectus distinctio ex, illum itaque,
                mollitia nemo nisi nobis, numquam praesentium tenetur!
              </v-card-text>
              <v-card-text class="news-card-text" style="color: #9da3a6;">21 февраля 2020 <b>*</b> Майя Бурганова</v-card-text>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      flat
      class="news-card"
      style="border-radius: 10px;"
    >
      <v-row>
        <v-col
          cols="4"
          md="4"
          class="card-img-col"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
            width="300px"
            style="border-radius: 10px;"
          ></v-img>
        </v-col>

        <v-col
          cols="8"
          md="8"
          class=""
        >
          <v-row
            class="flex-column"
          >
            <v-col class="news-card-desc flex-column flex-end" style="padding: 0;">
              <v-card-title class="news-card-title">Вкусности для бездомных</v-card-title>
              <v-card-text class="news-card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium dignissimos
                exercitationem ullam? A accusantium animi assumenda commodi delectus distinctio ex, illum itaque,
                mollitia nemo nisi nobis, numquam praesentium tenetur!
              </v-card-text>
              <v-card-text class="news-card-text" style="color: #9da3a6;">21 февраля 2020 <b>*</b> Майя Бурганова</v-card-text>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <v-card
    flat
    class="news-card"
    style="border-radius: 10px;"
  >
    <v-row>
      <v-col
        cols="4"
        md="4"
        class="card-img-col"
      >
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
          width="300px"
          style="border-radius: 10px;"
        ></v-img>
      </v-col>

      <v-col
        cols="8"
        md="8"
        class=""
      >
        <v-row
          class="flex-column"
        >
          <v-col class="news-card-desc flex-column flex-end" style="padding: 0;">
            <v-card-title class="news-card-title">Вкусности для бездомных</v-card-title>
            <v-card-text class="news-card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium dignissimos
              exercitationem ullam? A accusantium animi assumenda commodi delectus distinctio ex, illum itaque,
              mollitia nemo nisi nobis, numquam praesentium tenetur!
            </v-card-text>
            <v-card-text class="news-card-text" style="color: #9da3a6;">21 февраля 2020 <b>*</b> Майя Бурганова</v-card-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
  </div>
</template>

<script>
  export default {
    name: "NewsList"
  }
</script>

<style scoped>
  .news-card {
    padding: 10px 20px 10px 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .card-img-col {

  }

  .news-card-title {
    font-size: 24px;
    padding-top: 0;
  }

  .news-card-text {
    padding-bottom: 0;
  }

  p {
    padding: 0;
  }
</style>
