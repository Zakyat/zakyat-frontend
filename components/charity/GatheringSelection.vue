<template>
  <div class="px-3">
    <v-row
      v-if="campaigns[campaignId - 2]"
      justify="space-between"
      class="mt-5"
    >
      <v-col
        cols="12"
        md="4"
        class="pa-0 ma-0"
        v-if="campaigns"
      >
        <v-select
          outlined
          rounded
          flat
          :placeholder="campaignId && campaignId !== -1 ? campaigns[campaignId - 2].title : $t('charity.gathering.gatheringSelection')"
          :items="campaigns.filter(item => item.isActive).concat(anyCampaign)"
          item-value="id"
          class="pa-0 ma-0"
          :value="campaignId"
          @input="$router.push(`/charity?id=${$event}`)"
        >
          <template #item="{ item }">
            {{ item.title }}
          </template>
          <template #selection="{ item }">
            {{ item.title }}
          </template>
        </v-select>
      </v-col>
    </v-row>
    <div v-if="selectedCampaign">
      <CharityCard
        v-if="campaignId && campaign"
        v-bind="selectedCampaign"
      />
    </div>
  </div>
</template>

<script lang="js">
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
      anyCampaign: [
        { id: -1, title: 'Любой сбор' },
      ],
      campaign: '',
    };
  },
  apollo: {
    campaigns: {
      query: gql`
        query {
          campaigns {
            id,
            title,
            isActive
          }
        }
      `,
    },
    campaign: {
      query: gql`
        query getCampaign($id:Int!) {
          campaign (id: $id) {
            id
            photo
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
            moneyCollected
            transactions {
              id
            }
          }
        }
      `,
      variables () {
        return {
          id: this.campaignId === -1 ? 0 : this.campaignId,
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
