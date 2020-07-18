<template>
  <v-card class="pa-6" flat>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/PNwRFQDfoD8"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <h2 class="my-4">
      {{ $t('zakat.about.what_is_zakat.question') }}
    </h2>
    <p v-for="(paragraph, i) in $t('zakat.about.what_is_zakat.paragraphs')" :key="i">
      <template v-for="(fragment, j) in paragraph">
        <span v-if="typeof fragment === 'string'" :key="j">{{ fragment }}</span>
        <MyTooltip v-else :key="j" :word="fragment.text" :description="fragment.description" />
      </template>
    </p>
    <h2>{{ $t('zakat.about.required_to_pay.question') }}</h2>
    <h3>{{ $t('zakat.about.required_to_pay.should_be') }}</h3>
    <ul class="my-2" style="list-style-type: '— ';">
      <li v-for="(item, i) in $t('zakat.about.required_to_pay.list')" :key="i">
        <template v-for="(fragment, j) in item">
          <span v-if="typeof fragment === 'string'" :key="j">{{ fragment }}</span>
          <MyTooltip v-else :key="j" :word="fragment.text" :description="fragment.description" />
        </template>
      </li>
    </ul>
    <p>{{ $t('zakat.about.required_to_pay.conditions') }}</p>
  </v-card>
</template>

<script>
import Vue from 'vue';
import MyTooltip from '@/components/Zakat/MyTooltip.vue';

export default Vue.extend({
  components: {
    MyTooltip,
  },
});
</script>
