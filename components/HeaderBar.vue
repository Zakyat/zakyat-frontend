<template>
  <v-system-bar dark height="40">
    <v-icon>mdi-heart</v-icon>
    {{ $t('collected', [6234234]) }}
    <v-spacer />
    <v-btn text small>
      <v-icon medium>
        mdi-magnify
      </v-icon>
      {{ $t('search') }}
    </v-btn>
    <v-btn text small>
      <v-icon medium>
        mdi-vk
      </v-icon>
      {{ $t('VK') }}
    </v-btn>
    <v-btn text small>
      <v-icon medium>
        mdi-instagram
      </v-icon>
      {{ $t('instagram') }}
    </v-btn>
    <v-btn text small>
      <v-icon medium>
        mdi-account-circle
      </v-icon>
      {{ $t('login') }}
    </v-btn>
  </v-system-bar>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

});
</script>
