<template>
  <v-layout
    align-center
    justify-space-between
    class="tags-container"
  >
    <v-chip
      outlined
      close
      color="primary"
      class="tag-item"
      @click:close="remove(item)"
    >
      <strong>#zakat</strong>&nbsp;
    </v-chip>
    <div>
      <v-menu
        transition="slide-y-transition"
        bottom
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
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click=""
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      chips: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
      items: ['Streaming', 'Eating'],
    }
  },

  methods: {
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },
  },
}
</script>

<style scoped>
  .tags-container {
  }
  .tag-item {
    border-color: black;
  }
</style>
