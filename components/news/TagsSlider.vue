<template>
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
          :key="tag"
        >
          <v-chip
            class="mx-3 tag-item"
            outlined
            close
            close-icon="mdi-close"
            text-color="primary"
            @click:close="removeTag(tag)"
          >
            <strong>#{{ tag }}</strong>&nbsp;
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
            v-for="tag in tags"
            :key="tag"
            v-model="selectedTags"
            :label="'#'+tag"
            :value="tag"
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
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      tags: ['курбан_байрам', 'священныйпост', 'ураза_байрам', 'ураза_байрам2', 'ураза_байрам3', 'ураза_байрам4'],
      selectedTags: [] as string[],
    };
  },
  methods: {
    removeTag (tag: string) {
      this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
    },
    removeAllTags () {
      this.selectedTags = [];
    },
  },
});
</script>

<style scoped>
.tag-item {
  border-color: black;
}

.black--text /deep/ label {
  color: black;
}
</style>
