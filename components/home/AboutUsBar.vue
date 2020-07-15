<template>
  <v-container class="about-container">
    <v-row no-gutters>
      <v-col cols="12">
        <h1 class="display-1 font-weight-bold">
          {{ $t('home.about.title') }}
        </h1>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <div class="py-6 black--text">
          <p>{{ $t('home.about.paragraph1') }}</p>
          <p>{{ $t('home.about.paragraph2') }}</p>
          <v-btn height="40" rounded dark color="accent">
            {{ $t('home.about.learn_more') }}
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="text-right">
        <iframe
          width="97%"
          height="370"
          src="https://www.youtube.com/embed/PNwRFQDfoD8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.about-container {
  padding: 1% 6%;
  max-width: 100%;

  p {
    width: 95%;
  }
}
</style>
