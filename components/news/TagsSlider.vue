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
        :close-on-content-click="false"
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
            min="0"
            rounded
            outlined
            hide-details
            color="black"
            class="sadaka-input"
          />
          <div class="mt-5">
            <v-checkbox
              v-for="tag in tags"
              :key="tag"
              :label="'#'+tag"
              color="primary"
              on-icon="mdi-check-box-outline"
              class="ma-0 pa-0 black--text"
              @click="change(tag)"
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
            @click="removeAll"
          >
            <v-icon class="mr-1">
              mdi-close
            </v-icon>
            {{ $t('news.tags.clear_tags_button') }}
          </v-btn>
        </div>
      </v-menu>
    </div>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      tags: ['курбан_байрам', 'священныйпост', 'ураза_байрам', 'ураза_байрам2', 'ураза_байрам3', 'ураза_байрам4'],
      selectedTags: [],
    };
  },

  methods: {
    remove (item: never) {
      this.selectedTags.splice(item);
    },
    removeAll () {
      this.selectedTags = [];
    },
    change (item: never) {
      if (this.selectedTags.includes(item)) {
        this.selectedTags.splice(item);
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

.black--text /deep/ label {
  color: black;
}
</style>
