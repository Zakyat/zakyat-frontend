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
          v-for="tag in tags"
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
<!--          <v-text-field-->
<!--            placeholder="Введите тэг"-->
<!--            type="text"-->
<!--            rounded-->
<!--            outlined-->
<!--            hide-details-->
<!--            color="black"-->
<!--            class="search-tag"-->
<!--          />-->
          <v-checkbox
            v-for="tag in tags"
            :key="tag"
            :label="'#'+tag"
          />
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
    };
  },

  methods: {
    remove (item) {
      this.tags.splice(this.tags.indexOf(item), 1);
      this.tags = [...this.tags];
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
  .search-tag {
    padding: 10px;
    width: 300px;
  }
  .select-tags {
    padding: 10px;
  }
</style>
