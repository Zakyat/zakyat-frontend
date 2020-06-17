<template>
  <v-card class="about-container">
    <video height="340px" controls style="border-radius: 10px">
      <source
        :src="require('@/assets/videos/aboutUs.mp4')"
        type="video/mp4"
      >Your browser does not support HTML5 video.
    </video>
    <h2>{{ $t('zakat.about.what_is_zakat.question') }}</h2>
    <p>
      {{ $t('zakat.about.what_is_zakat.paragraph_1_start') }}
      <MyTooltip :word="$t('zakat.about.what_is_zakat.paragraps_1_tooltip.text')" :description="$t('zakat.about.what_is_zakat.paragraps_1_tooltip.description')" />
      {{ $t('zakat.about.what_is_zakat.paragraph_1_end') }}
    </p>
    <p>
      {{ $t('zakat.about.what_is_zakat.paragraph_2_start') }}
      <MyTooltip :word="$t('zakat.about.what_is_zakat.paragraps_2_tooltip_1.text')" :description="$t('zakat.about.what_is_zakat.paragraps_2_tooltip_1.description')" />
      {{ $t('zakat.about.what_is_zakat.paragraph_2_continuation') }}
      <MyTooltip :word="$t('zakat.about.what_is_zakat.paragraps_2_tooltip_2.text')" :description="$t('zakat.about.what_is_zakat.paragraps_2_tooltip_2.description')" />
      {{ $t('zakat.about.what_is_zakat.paragraph_2_end') }}
    </p>
    <p>{{ $t('zakat.about.what_is_zakat.paragraps_3_end') }} </p>
    <h2>{{ $t('zakat.about.required_to_pay.question') }}</h2>
    <h4>{{ $t('zakat.about.required_to_pay.should_be') }}</h4>
    <ul class="pa-0 my-2" style="list-style-type:none;">
      <li>{{ $t('zakat.about.required_to_pay.paragraph_1') }}</li>
      <li>{{ $t('zakat.about.required_to_pay.paragraph_2') }}</li>
      <li>{{ $t('zakat.about.required_to_pay.paragraph_3') }}</li>
      <li>{{ $t('zakat.about.required_to_pay.paragraph_4') }}</li>
      <li>
        <MyTooltip :word="$t('zakat.about.required_to_pay.tooltip_1.text')" :description="$t('zakat.about.required_to_pay.tooltip_1.description')" />
      </li>
      <li>
        {{ $t('zakat.about.required_to_pay.paragraph_5_start') }}
        <MyTooltip :word="$t('zakat.about.required_to_pay.paragraps_5_tooltip.text')" :description="$t('zakat.about.required_to_pay.paragraps_5_tooltip.description')" />
        {{ $t('zakat.about.required_to_pay.paragraps_5_end') }}
      </li>
    </ul>
    <p>{{ $t('zakat.about.required_to_pay.paragraps_6') }}</p>
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

<style lang="scss" scoped>
.about-container {
  padding: 25px;
  margin: 8px 0px 8px 0;
  border-radius: 10px !important;
  }
</style>
