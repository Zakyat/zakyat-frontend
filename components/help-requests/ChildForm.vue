<template>
  <div>
    <v-row class="mt-3">
      <v-col cols="7" class="pr-9">
        <v-text-field
          rounded
          dense
          height="50px"
          :placeholder="$t('help_request.categories.child_health_problems.child_form.name')"
          outlined
          type="text"
          :rules="fieldRules"
        />
      </v-col>
      <v-col cols="5">
        <v-autocomplete
          class="category__autocomplete-field"
          dense
          outlined
          rounded
          :items="genders"
          item-text="text"
          item-value="value"
          :placeholder="$t('help_request.categories.child_health_problems.gender')"
          height="50"
          type="text"
          :rules="fieldRules"
        />
      </v-col>
    </v-row>
    <h2 class="category__small-header ml-3">
      {{ $t('help_request.categories.child_health_problems.birthdate') }}
    </h2>
    <v-menu
      :v-model="childDatePicker"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="childDate"
          outlined
          class="category__date-field"
          prepend-inner-icon="mdi-calendar-multiselect"
          readonly
          rounded
          v-bind="attrs"
          placeholder="__-__-____"
          color="success"
          :rules="fieldRules"
          v-on="on"
        />
      </template>
      <v-date-picker
        v-model="childDate"
        color="success"
        @input="childDatePicker = false"
      />
    </v-menu>
    <h2 class="category__default-header">
      {{ $t('help_request.categories.child_health_problems.child.identification') }}
    </h2>
    <v-file-input
      solo
      flat
      prepend-icon=""
      multiple="multiple"
      hide-details
      :placeholder="$t('help_request.categories.child_health_problems.child.identification_instructions')"
      class="category__file-sender ml-n3"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ChildForm',
  data () {
    return {
      fieldRules: [(v: string) => !!v],
      genders: [
        { text: this.$t('help_request.categories.child_health_problems.genders.male'), value: 'male' },
        { text: this.$t('help_request.categories.child_health_problems.genders.male'), value: 'female' },
      ],
      childDate: '',
      childDatePicker: false,
    };
  },
});
</script>

<style scoped lang="scss">
  .category__small-header {
    font-size: 16px;
    font-weight: normal;
    color: #b0b0b0;
  }

  .category__autocomplete-field {
    width: 230px;
  }

  .category__date-field {
    width: 170px;
    margin-top: 10px;
  }

  .category__default-header {
    font-weight: normal;
    font-size: 22px;
  }

  .category__file-sender {
    text-decoration: underline;
    text-underline-position: under;
    color: #666;
  }
</style>
