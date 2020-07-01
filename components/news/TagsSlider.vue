<template>
  <v-layout
    align-center
    justify-space-between
    class="tags-container"
  >
    <v-sheet
      class="mx-5"
      max-width="700"
      style="background-color: #f2f2f2;"
    >
      <v-slide-group>
        <v-slide-item
          v-for="tag in selectedTags"
          :key="tag"
        >
          <v-chip
            class="mx-3 tag-item"
            outlined
            close
            color="primary"
            @click:close="remove(tag)"
          >
            <strong>#{{ tag }}</strong>&nbsp;
          </v-chip>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <div>
      <v-menu
        offset-y
        transition="slide-y-transition"
        bottom
        :close-on-content-click='false'
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            outlined
            rounded
            color="black"
            dark
            v-bind="attrs"
            v-on="on"
          >
            {{ $t('news.tags.show_tags_button') }}
            <v-icon class="mr-1">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list class="pa-5">
          <v-text-field
            :placeholder="$t('news.tags.search_tags_input')"
            type="text"
            min="0"
            rounded
            outlined
            hide-details
            color="black"
            class="sadaka-input"
          />
          <v-checkbox
            v-for="tag in tags"
            :key="tag"
            :label="'#'+tag"
            @click="change(tag)"
          />
          <div>
            <v-btn
              text
              color="red"
              @click="removeAll"
            >
              <v-icon small class="mr-1">mdi-delete</v-icon>
              {{ $t('news.tags.clear_tags_button') }}
            </v-btn>
          </div>
        </v-list>
      </v-menu>
    </div>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      tags: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping', 'Streaming', 'Eating'],
      selectedTags: [],
    };
  },

  methods: {
    remove (item: never) {
      this.selectedTags.splice(this.selectedTags.indexOf(item), 1);
      this.selectedTags = [...this.selectedTags];
    },
    removeAll () {
      this.selectedTags = [];
    },
    change (item: never) {
      if (this.selectedTags.includes(item)) {
        this.selectedTags.splice(this.selectedTags.indexOf(item), 1);
        this.selectedTags = [...this.selectedTags];
      } else {
        this.selectedTags.push(item);
      }
    },
  },
});
</script>

<style scoped>
.tag-item {
  border-color: black;
}
</style>
