<template>
  <v-container>
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
      <v-col cols="12" md="6" class="text-center">
        <video height="340px" controls>
          <source :src="require('@/assets/videos/aboutUs.mp4')" type="video/mp4">
        </video>
      </v-col>
    </v-row>
  </v-container>
</template>
