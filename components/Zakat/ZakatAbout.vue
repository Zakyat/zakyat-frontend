<template>
  <div class="ma-4">
    <v-col>
      <video height="340px" controls>
        <source
          :src="require('@/assets/videos/aboutUs.mp4')"
          type="video/mp4"
        >Your browser does not support HTML5 video.
      </video>
    </v-col>
    <div class="ma-4">
      <h3>{{ $t('zakat.about.what_is_zakat.question') }}</h3>
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
      <h3>{{ $t('zakat.about.required_to_pay.question') }}</h3>
      <h4>{{ $t('zakat.about.required_to_pay.should_be') }}</h4>
      <ul style="list-style-type:none;">
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
    </div>
  </div>
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
