<template>
  <div>
    <v-row>
<!--      <span class="subtitle">{{ $t('reports.expenses.subtitle') }}</span>-->
      <span class="subtitle">Всего переданно нуждающимся</span>
      <v-spacer />
      <span class="subtitle">{{ total | rubles }}</span>
    </v-row>
    <v-row style="padding: 30px 0 10px;">
      <v-flex lg2 class="text--secondary">
        {{ $t('reports.expenses.application_number') }}
      </v-flex>
      <v-flex lg2 class="text--secondary">
        {{ $t('reports.expenses.application_date') }}
      </v-flex>
      <v-flex lg3 class="text--secondary">
        {{ $t('reports.expenses.beneficiary_name') }}
      </v-flex>
      <v-flex lg3 class="text--secondary">
        {{ $t('reports.expenses.situation_description') }}
      </v-flex>
      <v-flex lg2 class="text--secondary text-right">
        {{ $t('reports.expenses.amounts') }}
      </v-flex>
    </v-row>
    <v-row
      v-for="(donatation, i) in campaigns"
      :key="i"
      align="center"
      class="mt-4"
      style="background: white; border-radius: 10px; min-height: 60px; padding: 20px;"
    >
      <v-flex lg2 class="text">
        {{ donatation.id }}
      </v-flex>
      <v-flex lg2 class="text">
        {{ localeDate(donatation.createdAt) }}
      </v-flex>
      <v-flex lg3 class="text" style="font-weight: bold;">
        {{ donatation.title }}
      </v-flex>
      <v-flex lg3 class="text">
        {{ donatation.problem }}
      </v-flex>
      <v-flex lg2 class="text-right text">
        <span style="font-weight: bold;">{{ donatation.moneyCollected | rubles }}</span>/{{ donatation.goal | rubles }}
      </v-flex>
    </v-row>
    <v-row class="text-center mt-6 text-black">
      <v-pagination
        v-model="page"
        :length="totalCampaignsPages"
        :total-visible="6"
        circle
      />
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
  props: {
    totalCampaignsPages: {
      type: Number,
    },
    page: {
      type: Number,
      default: 1,
    },
    itemsOnPage: {
      type: Number,
    },
    // month: {
    //   type: Number,
    //   default: 0,
    //   required: false,
    // },
    // year: {
    //   type: Number,
    //   default: 2020,
    //   required: false,
    // },
  },
  data () {
    return {
      campaigns: [],
    };
  },
  apollo: {
    campaigns: {
      query: gql`
        query campaigns ($limit: Int, $offset: Int) {
          campaigns (limit: $limit, offset: $offset) {
            id
            title
            problem
            goal
            moneyCollected
            createdAt
          }
        }
      `,
      variables () {
        return {
          limit: this.itemsOnPage,
          offset: (this.page - 1) * this.itemsOnPage,
        };
      },
    },
  },
  methods: {
    localeDate (stringDate: string) {
      const date = new Date(stringDate).toLocaleDateString(this.$i18n.locale, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
      return date;
    },
  },
  computed: {
    total (): number {
      return this.campaigns.reduce((acc, item) => item.moneyCollected + acc, 0);
    },
  },
});
</script>

<style scoped>
.text {
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
}

.subtitle {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
}
</style>
