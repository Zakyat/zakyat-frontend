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
          v-for="n in 25"
          :key="n"
        >
          <v-chip
            class="mx-3 tag-item"
            outlined
            close
            color="primary"
            @click:close="remove(item)"
          >
            <strong>#zakat {{ n }}</strong>&nbsp;
          </v-chip>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
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
