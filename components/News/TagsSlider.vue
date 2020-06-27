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
          v-for="tag in selected_tags"
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
            class=""
            outlined
            rounded
            color="black"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Показать по тегам
          </v-btn>
        </template>
        <v-list class="select-tags">
          <v-text-field
            v-model.number="input"
            placeholder="Введите тэг"
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
          <div class="">
            <v-btn
              text
              color="red"
              @click="remove_all()"
            >
              <v-icon small class="mr-1">mdi-delete</v-icon>
              Очистить
            </v-btn>
          </div>
        </v-list>
      </v-menu>
    </div>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      tags: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping', 'Streaming', 'Eating'],
      selected_tags: [],
    };
  },

  methods: {
    remove (item) {
      this.selected_tags.splice(this.selected_tags.indexOf(item), 1);
      this.selected_tags = [...this.selected_tags];
    },
    remove_all () {
      this.selected_tags = [];
    },
    change (item) {
      if (this.selected_tags.includes(item)) {
        this.selected_tags.splice(this.selected_tags.indexOf(item), 1);
        this.selected_tags = [...this.selected_tags];
      } else {
        this.selected_tags.push(item);
      }
    },
  },
};
</script>

<style scoped>
.tags-container {
}
.tag-item {
  border-color: black;
}
.select-tags {
  padding: 20px;
}
</style>
