<template>
  <div class="px-3">
    <v-row
      justify="space-between"
      class="mt-5"
    >
      <v-col
        cols="12"
        md="4"
        class="pa-0 ma-0"
      >
        <v-select
          outlined
          rounded
          flat
          :placeholder="$t('charity.gathering.gatheringSelection')"
          :items="campaigns"
          item-value="id"
          class="pa-0 ma-0"
          :value="campaignId"
          @input="$router.push(`/charity?id=${$event}`)"
        >
          <template #item="{ item }">
            {{ item.title }}, {{ item.id }}
          </template>
          <template #selection="{ item }">
            {{ item.title }}, {{ item.id }}
          </template>
        </v-select>
      </v-col>
      <v-spacer />
      <v-col
        cols="auto"
        class="pa-0 md-0"
      >
        <v-checkbox
          v-model="isAnonymous"
          :onchange="makeAnonymous()"
          class="pa-0 md-0"
          on-icon="mdi-check-box-outline"
        >
          <template v-slot:label>
            <span class="black--text"> {{ $t('charity.gathering.anonymous') }} </span>
          </template>
        </v-checkbox>
      </v-col>
    </v-row>
    <CharityCard
      v-if="campaignId"
      v-bind="selectedCampaign"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import CharityCard from '@/components/charity/CharityCard.vue';
import gql from 'graphql-tag';

export default Vue.extend({
  name: 'GatheringSelection',
  components: {
    CharityCard,
  },
  props: {
    campaignId: {
      type: Number,
    },
  },
  data () {
    return {
      campaigns: [],
      campaign: '',
      isAnonymous: false,
    };
  },
  apollo: {
    campaigns: {
      query: gql`
        query {
          campaigns {
            id,
            title,
          }
        }
      `,
    },
    campaign: {
      query: gql`
        query getCampaign($id:Int!) {
          campaign (id: $id) {
            id
            title
            problem
            description
            goal
            createdBy {
              bio
            }
            project{
              title
            }
          }
        }
      `,
      variables () {
        return {
          id: this.campaignId,
        };
      },
    },
  },
  computed: {
    selectedCampaign () {
      this.$apollo.queries.campaign.refresh();
      return this.campaign;
    },
  },
  methods: {
    makeAnonymous () {
      this.$emit('anonymous', this.isAnonymous);
    },
  },
});
</script>
