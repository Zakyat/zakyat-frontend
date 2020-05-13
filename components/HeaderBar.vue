<template>
    <v-system-bar dark height="50">
    <v-spacer />
    <img src="@/assets/images/header/heart_symbol.svg" class="ml-12 mr-3">
    <!-- TODO: make number format with empty spaces. Ex.6234234 as 6 234 234 -->
    <t>{{ $t('collected', [6234234]) }}</t>
    <v-spacer />
    <v-spacer />
    <v-spacer />
    <v-spacer />
    <v-btn text small class="typical_text mr-7">
      <v-icon medium>
        mdi-magnify
      </v-icon>
      {{ $t('search') }}
    </v-btn>
    <v-btn text small class="typical_text mr-7">
      <v-icon medium>
        mdi-vk
      </v-icon>
      {{ $t('VK') }}
    </v-btn>
    <v-btn text small class="typical_text mr-7">
      <v-icon medium>
        mdi-instagram
      </v-icon>
      {{ $t('instagram') }}
    </v-btn>
    <v-btn text small class="typical_text mr-10">
      <v-icon medium>
        mdi-account-circle
      </v-icon>
      {{ $t('login') }}
    </v-btn>
    <v-flex md2 xs6 >
      <v-overflow-btn
        :value="$i18n.locale"
        :items="$i18n.locales"
        item-text="name"
        item-value="code"
        hide-selected
        dense
        auto-select-first
        @input="$i18n.setLocale"
      />
    </v-flex>
  </v-system-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>
<style lang="scss" scoped>
.v-overflow-btn {
  max-width: 105px;
}

.typical_text {
  text-transform:none !important;
}
</style>
