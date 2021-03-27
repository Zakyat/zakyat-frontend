<template>
  <div>
    <CategoryHeader>
      {{ $t('help_request.categories.child_health_problems.title') }}
    </CategoryHeader>
    <p class="mt-3" style="font-size: 16px;">
      {{ $t('help_request.categories.child_health_problems.subtitle') }}
    </p>
    <v-form
      ref="form"
      v-model="isValid"
    >
      <div class="infoAboutYou">
        <h2 class="category__main-header mt-8">
          {{ $t('help_request.categories.child_health_problems.your_info') }}
        </h2>
        <v-row class="mt-3">
          <v-col cols="7" class="pr-9">
            <v-text-field
              dense
              height="50"
              :placeholder="$t('help_request.categories.child_health_problems.enter_name')"
              rounded
              outlined
              type="text"
              :rules="fieldRules"
            />
            <v-text-field
              rounded
              dense
              height="50"
              :placeholder="$t('help_request.categories.child_health_problems.enter_citizenship')"
              outlined
              type="text"
              :rules="fieldRules"
            />
            <v-text-field
              rounded
              dense
              height="50"
              :placeholder="$t('help_request.categories.child_health_problems.phone_number')"
              outlined
              type="number"
              :rules="fieldRules"
            />
            <v-autocomplete
              class="category__autocomplete-field"
              outlined
              dense
              height="50"
              solo
              flat
              rounded
              :items="religions"
              item-text="text"
              item-value="value"
              :placeholder="$t('help_request.categories.child_health_problems.religion')"
              :rules="fieldRules"
            />
          </v-col>
          <v-col cols="5">
            <v-autocomplete
              v-model="userGender"
              class="category__autocomplete-field"
              outlined
              solo
              dense
              flat
              rounded
              height="50"
              :items="genders"
              item-text="text"
              item-value="value"
              :placeholder="$t('help_request.categories.child_health_problems.gender')"
              type="text"
              :rules="fieldRules"
            />
          </v-col>
        </v-row>
        <h2 class="category__small-header ml-3">
          {{ $t('help_request.categories.child_health_problems.birthdate') }}
        </h2>
        <v-menu
          v-model="userDatePicker"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290"
        >
          <template #activator="{ on, attrs }">
            <v-text-field
              v-model="userDate"
              outlined
              class="category__date-field"
              prepend-inner-icon="mdi-calendar-multiselect"
              readonly
              v-bind="attrs"
              placeholder="__-__-____"
              rounded
              color="success"
              :rules="fieldRules"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="userDate"
            color="success"
            @input="userDatePicker = false"
          />
        </v-menu>
        <v-text-field
          class="category__outer-row-field"
          dense
          height="50"
          :placeholder="$t('help_request.categories.child_health_problems.residential_address')"
          outlined
          rounded
          type="text"
          :rules="fieldRules"
        />
        <h2 class="category__default-header">
          {{ $t('help_request.categories.child_health_problems.passport') }}
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          multiple="multiple"
          hide-details
          :placeholder="$t('help_request.categories.child_health_problems.passport_instructions')"
          class="category__file-sender ml-n3"
        />
        <h2 class="category__small-header mt-4">
          {{ $t('help_request.categories.child_health_problems.job_instructions') }}
        </h2>
        <v-expansion-panels flat>
          <v-expansion-panel>
            <v-expansion-panel-header class="category__work-info">
              <h2 class="category__default-header ml-n6">
                {{ $t('help_request.categories.child_health_problems.work.title') }}
              </h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="ml-n6">
              <v-text-field
                class="category__outer-row-field"
                dense
                height="50"
                :placeholder="$t('help_request.categories.child_health_problems.work.place')"
                outlined
                rounded
                type="text"
                :rules="fieldRules"
              />
              <v-text-field
                class="category__outer-row-field"
                dense
                height="50"
                :placeholder="$t('help_request.categories.child_health_problems.work.position')"
                outlined
                rounded
                type="text"
                :rules="fieldRules"
              />
              <v-text-field
                class="category__outer-row-field"
                dense
                height="50"
                :placeholder="$t('help_request.categories.child_health_problems.work.salary')"
                outlined
                rounded
                type="text"
                :rules="fieldRules"
              />
              <v-text-field
                class="category__outer-row-field"
                dense
                height="50"
                :placeholder="$t('help_request.categories.child_health_problems.work.pension')"
                outlined
                rounded
                type="text"
                :rules="fieldRules"
              />
              <h2 class="category__default-header">
                {{ $t('help_request.categories.child_health_problems.work.certificate') }}
              </h2>
              <v-file-input
                solo
                flat
                prepend-icon=""
                hide-details
                :placeholder="$t('help_request.categories.child_health_problems.work.attach_image')"
                class="category__file-sender ml-n3"
              />
              <h2 class="category__default-header">
                {{ $t('help_request.categories.child_health_problems.work.records') }}
              </h2>
              <v-file-input
                solo
                flat
                prepend-icon=""
                multiple="multiple"
                hide-details
                :placeholder="$t('help_request.categories.child_health_problems.work.attach_image')"
                class="category__file-sender ml-n3"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <h2 class="category__default-header mt-2">
          {{ $t('help_request.categories.child_health_problems.income_statement') }}
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          multiple="multiple"
          hide-details
          :placeholder="$t('help_request.categories.child_health_problems.income_attach')"
          class="category__file-sender ml-n3"
        />
        <h2 class="category__default-header mt-3">
          {{ $t('help_request.categories.child_health_problems.labor_exchange_reference') }}
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          multiple="multiple"
          hide-details
          :placeholder="$t('help_request.categories.child_health_problems.labor_exchange_attach')"
          class="category__file-sender ml-n3"
        />
        <h2 class="category__default-header mt-3">
          {{ $t('help_request.categories.child_health_problems.family_status') }}
        </h2>
        <!--here, depending on gender, the endings of the items and placeholders changes-->
        <v-autocomplete
          v-model="familyStatus"
          class="category__autocomplete-field mt-3"
          outlined
          dense
          solo
          flat
          rounded
          item-text="text"
          item-value="value"
          :items="userGender === 'М' || userGender === '' ? familyStatusesMan : familyStatusesWoman"
          :placeholder="(userGender === 'М' || userGender === '' ? familyStatusesMan[0].text : familyStatusesWoman[0]).text"
          height="50"
          type="text"
          :rules="fieldRules"
        />
      </div>

      <div class="childInfoBlock">
        <h2 class="category__main-header mt-2">
          {{ $t('help_request.categories.child_health_problems.child.title') }}
        </h2>
        <h2 class="category__default-header mt-6">
          {{ $t('help_request.categories.child_health_problems.child.disability_certificate') }}
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          hide-details
          :placeholder="$t('help_request.categories.child_health_problems.work.attach_image')"
          class="category__file-sender ml-n3"
        />
        <h2 class="category__default-header mt-3">
          {{ $t('help_request.categories.child_health_problems.child.doctor_statement') }}
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          hide-details
          :placeholder="$t('help_request.categories.child_health_problems.work.attach_image')"
          class="category__file-sender ml-n3"
        />
        <h2 class="category__default-header mt-3">
          {{ $t('help_request.categories.child_health_problems.child.medication_invoice') }}
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          hide-details
          :placeholder="$t('help_request.categories.child_health_problems.work.attach_image')"
          class="category__file-sender ml-n3"
        />
        <h2 class="category__default-header mt-3">
          {{ $t('help_request.categories.child_health_problems.child.identification') }}
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          hide-details
          multiple
          :placeholder="$t('help_request.categories.child_health_problems.child.identification_instructions')"
          class="category__file-sender ml-n3"
        />
      </div>

      <div class="spouseInfo">
        <v-expansion-panels flat>
          <v-expansion-panel
            :disabled="familyStatus === 'single' || familyStatus === 'other'"
          >
            <v-expansion-panel-header
              class="category___spouse-header"
              expand-icon="mdi-plus-circle-outline"
            >
              <h2 class="category__main-header ml-n6">
                {{ $t('help_request.categories.child_health_problems.spouse') }}
              </h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="ml-n6">
              <v-row class="mt-n2">
                <v-col cols="7" class="pr-9">
                  <v-text-field
                    rounded
                    dense
                    height="50"
                    :placeholder="$t('help_request.categories.child_health_problems.enter_name')"
                    outlined
                    type="text"
                    :rules="fieldRules"
                  />
                  <v-text-field
                    rounded
                    dense
                    height="50"
                    :placeholder="$t('help_request.categories.child_health_problems.enter_citizenship')"
                    outlined
                    type="text"
                    :rules="fieldRules"
                  />
                </v-col>
              </v-row>
              <h2 class="category__small-header ml-3">
                {{ $t('help_request.categories.child_health_problems.birthdate') }}
              </h2>
              <v-menu
                v-model="spouseDatePicker"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    v-model="spouseDate"
                    outlined
                    rounded
                    class="category__date-field"
                    prepend-inner-icon="mdi-calendar-multiselect"
                    readonly
                    v-bind="attrs"
                    placeholder="__-__-____"
                    color="success"
                    :rules="fieldRules"
                    v-on="on"
                  />
                </template>
                <v-date-picker
                  v-model="spouseDate"
                  color="success"
                  @input="spouseDatePicker = false"
                />
              </v-menu>
              <v-text-field
                class="category__outer-row-field"
                dense
                height="50"
                :placeholder="$t('help_request.categories.child_health_problems.residential_address')"
                outlined
                rounded
                type="text"
                :rules="fieldRules"
              />
              <h2 class="category__default-header">
                {{ $t('help_request.categories.child_health_problems.passport') }}
              </h2>
              <v-file-input
                solo
                flat
                prepend-icon=""
                multiple="multiple"
                hide-details
                :placeholder="$t('help_request.categories.child_health_problems.marriage_attachment')"
                class="category__file-sender ml-n3"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <!--here user can add other child-form-->
      <div class="otherChildInfoBlock">
        <h2 class="category__main-header mt-2">
          {{ $t('help_request.categories.child_health_problems.child_form.title') }}
          <v-btn icon @click="addChildForm">
            <v-icon>mdi-plus-circle-outline</v-icon>
          </v-btn>
        </h2>
        <div
          v-for="form in childFormsAmount"
          :key="form"
        >
          <ChildForm />
        </div>
      </div>

      <div class="category__agreement">
        <v-checkbox
          v-model="agreedToTerms"
          :label="$t('help_request.categories.child_health_problems.terms_consent')"
          color="success"
          :rules="fieldRules"
        />
        <v-btn
          depressed
          height="46"
          min-width="300"
          color="#56B756"
          :disabled="!isValid || !agreedToTerms"
          class="button-to"
          @click="validate"
        >
          {{ $t('help_request.categories.child_health_problems.send') }}
        </v-btn>
      </div>
    </v-form>
    <v-dialog
      v-model="getWarning"
      width="440"
      class="warningDialog"
    >
      <WarningDialog @close-dialog="closeDialog" />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CategoryHeader from '@/components/help-requests/CategoryHeader.vue';
import WarningDialog from '@/components/help-requests/WarningDialog.vue';
import ChildForm from '@/components/help-requests/ChildForm.vue';

export default Vue.extend({
  name: 'ChildrenWithDisabilities',
  components: {
    ChildForm,
    WarningDialog,
    CategoryHeader,
  },
  data () {
    return {
      // options for choose
      // need to add this fields into the ru.json, in the en.json we need
      // only one default array of common familyStatusItems
      genders: [
        { text: this.$t('help_request.categories.child_health_problems.genders.male'), value: 'М' },
        { text: this.$t('help_request.categories.child_health_problems.genders.female'), value: 'Ж' }],
      religions: [
        { text: this.$t('help_request.categories.child_health_problems.religions.islam'), value: 'islam' },
        { text: this.$t('help_request.categories.child_health_problems.religions.christianity'), value: 'christianity' },
        { text: this.$t('help_request.categories.child_health_problems.religions.judaism'), value: 'judaism' },
        { text: this.$t('help_request.categories.child_health_problems.religions.atheism'), value: 'atheism' },
        { text: this.$t('help_request.categories.child_health_problems.religions.other'), value: 'other' },
      ],
      familyStatusesMan: [
        { text: this.$t('help_request.categories.child_health_problems.family_statuses.male.married'), value: 'married' },
        { text: this.$t('help_request.categories.child_health_problems.family_statuses.male.divorced'), value: 'divorced' },
        { text: this.$t('help_request.categories.child_health_problems.family_statuses.male.single'), value: 'single' },
        { text: this.$t('help_request.categories.child_health_problems.family_statuses.male.other'), value: 'other' },
      ],
      familyStatusesWoman: [
        { text: this.$t('help_request.categories.child_health_problems.family_statuses.female.married'), value: 'married' },
        { text: this.$t('help_request.categories.child_health_problems.family_statuses.female.divorced'), value: 'divorced' },
        { text: this.$t('help_request.categories.child_health_problems.family_statuses.female.single'), value: 'single' },
        { text: this.$t('help_request.categories.child_health_problems.family_statuses.female.other'), value: 'other' },
      ],
      // user data
      userGender: '',
      userDate: '',
      spouseDate: '',
      userDatePicker: false,
      spouseDatePicker: false,
      childFormsAmount: 0,
      familyStatus: '',
      hasSpouse: false,
      getWarning: false,
      agreedToTerms: false,
      isValid: '',
      fieldRules: [(v: string) => !!v],
    };
  },
  methods: {
    addChildForm () {
      this.childFormsAmount++;
    },
    validate () {
      if (!this.isValid || !this.agreedToTerms) {
        (this.$refs.form as HTMLFormElement).validate();
        this.getWarning = !this.getWarning;
      }
    },
    closeDialog () {
      this.getWarning = !this.getWarning;
    },
  },
});
</script>

<style scoped lang="scss">
.button-to {
  letter-spacing: normal;
  font-weight: normal;
  width: 140px;
  border-radius: 30px;
  font-size: 16px;
}

.category__main-header {
  color: #1c6739;
}

.category__default-header {
  font-weight: normal;
  font-size: 22px;
}

.category__small-header {
  font-size: 16px;
  font-weight: normal;
  color: #b0b0b0;
}

.category__autocomplete-field {
  width: 230px;
  height: 50px !important;
}

.category__date-field {
  width: 170px;
  margin-top: 10px;
}

.category__outer-row-field {
  width: 600px;
}

.category__file-sender {
  text-decoration: underline;
  text-underline-position: under;
  color: #666;
}

.category__work-info {
  width: 220px;
}

.category___spouse-header {
  width: 170px;
}

.category__agreement {
  display: grid;
  place-items: center;
}
</style>
