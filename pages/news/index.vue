<template>
  <v-container>
    <v-row class="pt-8 pb-5 px-2">
      <h1>{{ $t('news.title') }}</h1>
      <v-layout
        align-center
        justify-space-between
      >
        <v-sheet
          class="mx-5"
          max-width="700"
          style="background-color: inherit;"
        >
          <v-slide-group
            prev-icon="mdi-chevron-left-circle-outline"
            next-icon="mdi-chevron-right-circle-outline"
            show-arrows
          >
            <v-slide-item
              v-for="tag in selectedTags"
              :key="tag.id"
            >
              <v-chip
                class="mx-3 tag-item"
                outlined
                close
                close-icon="mdi-close"
                text-color="primary"
                @click:close="removeTag(tag)"
              >
                <strong>#{{ tag.name }}</strong>&nbsp;
              </v-chip>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
        <v-menu
          offset-y
          transition="slide-y-transition"
          bottom
          :close-on-content-click="false"
        >
          <template #activator="{ on, attrs }">
            <v-btn
              outlined
              rounded
              color="black"
              dark
              v-bind="attrs"
              v-on="on"
            >
              {{ $t('news.tags.show_tags_button') }}
              <v-icon class="mr-1">
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </template>
          <v-list class="pa-5">
            <v-text-field
              :placeholder="$t('news.tags.search_tags_input')"
              append-icon="mdi-magnify"
              type="text"
              rounded
              outlined
              hide-details
              color="black"
            />
            <div class="mt-5">
              <v-checkbox
                v-for="tag in postTags"
                :key="tag.id"
                v-model="selectedTags"
                :label="'#'+tag.name"
                :value="tag"
                @change="refetchNews"
                color="primary"
                on-icon="mdi-check-box-outline"
                class="ma-0 pa-0 black--text"
              />
            </div>
          </v-list>
          <v-divider />
          <div
            class="px-5 py-2"
            style="background-color: white;"
          >
            <v-btn
              text
              color="primary"
              class="pa-0"
              @click="removeAllTags"
            >
              <v-icon class="mr-1">
                mdi-close
              </v-icon>
              {{ $t('news.tags.clear_tags_button') }}
            </v-btn>
          </div>
        </v-menu>
      </v-layout>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        md="9"
        class="px-2"
      >
        <NewsCard
          v-for="newsItem in posts"
          :key="newsItem.id"
          v-bind="newsItem"
        />
      </v-col>
      <Sadaka />
    </v-row>
  </v-container>
</template>

<script lang="js">
import Vue from 'vue';
import NewsCard from '@/components/news/NewsCard.vue';
import Sadaka from '@/components/news/Sadaka.vue';
import gql from 'graphql-tag';

export default Vue.extend({
  head: {
    title: 'Новости | Благотворительный фонд "Закят"',
  },
  components: {
    Sadaka,
    NewsCard
  },
  data () {
    return {
      selectedTags: [],
      postTags: [],
      posts: [],
    };
  },
  apollo: {
    postTags: {
      query: gql`
        query {
          postTags {
            id
            name
          }
        }
      `,
    },
    posts: {
      query: gql`
        query ($tags: [ID]){
          posts (
            tags: $tags
          ){
            id,
            image,
            title,
            description,
            createdAt,
            createdBy {
              fullName
            }
          }
        }
      `,
      variables: {
        tags: this?.selectedTags.map(tag => {
          return Number(tag.id)
        })
      },
    },
  },
  methods: {
    removeTag (tag) {
      this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
      this.$apollo.queries.posts.refetch({
        tags: this?.selectedTags.map(tag => {
          return Number(tag.id)
        })
      })
    },
    removeAllTags () {
      this.selectedTags = [];
      this.$apollo.queries.posts.refetch({
        tags: this?.selectedTags.map(tag => {
          return Number(tag.id)
        })
      })
    },
    refetchNews() {
      this.$apollo.queries.posts.refetch({
        tags: this?.selectedTags.map(tag => {
          return Number(tag.id)
        })
      })
    }
  },
});
</script>
