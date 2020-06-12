<template>
  <div>
    <v-flex xs12 md6 class="text-center">
      <video rounded height="340px" controls>
        <source
          :src="require('@/assets/videos/aboutUs.mp4')"
          type="video/mp4"
        >Your browser does not support HTML5 video.
      </video>
    </v-flex>
    <div>
      <h3>{{ $t('ZakatPage.About.whatzakat') }}</h3>
      <p>
        {{ $t('ZakatPage.About.whatzakatans1') }}
        <MyTooltip :item="{word:$t('ZakatPage.About.whatzakattooltip1word'), description:$t('ZakatPage.About.whatzakattooltip1description')}" />
        {{ $t('ZakatPage.About.whatzakatans2') }}
      </p>
      <p>
        {{ $t('ZakatPage.About.whatzakatans3') }}
        <MyTooltip :item="{word:$t('ZakatPage.About.whatzakattooltip2word'), description:$t('ZakatPage.About.whatzakattooltip2description')}" />
        {{ $t('ZakatPage.About.whatzakatans4') }}
        <MyTooltip :item="{word:$t('ZakatPage.About.whatzakattooltip3word'), description:$t('ZakatPage.About.whatzakattooltip3description')}" />
        {{ $t('ZakatPage.About.whatzakatans5') }}
      </p>
      <p>{{ $t('ZakatPage.About.whatzakatans6') }} </p>
      <h3>{{ $t('ZakatPage.About.whopay') }}</h3>
      <h4>{{ $t('ZakatPage.About.whopay2') }}</h4>
      <p>{{ $t('ZakatPage.About.whopayans1') }}</p>
      <p>{{ $t('ZakatPage.About.whopayans2') }}</p>
      <p>{{ $t('ZakatPage.About.whopayans3') }}</p>
      <p>{{ $t('ZakatPage.About.whopayans4') }}</p>

      <p>
        <MyTooltip :item="{word:$t('ZakatPage.About.whopaytooltip1word'), description:$t('ZakatPage.About.whopaytooltip1description')}" />
      </p>
      <p>
        {{ $t('ZakatPage.About.whopayans5') }}
        <MyTooltip :item="{word:$t('ZakatPage.About.whopaytooltip2word'), description:$t('ZakatPage.About.whopaytooltip2description')}" />
        {{ $t('ZakatPage.About.whopayans6') }}
      </p>
      <p>
        {{ $t('ZakatPage.About.whopayans7') }}
      </p>
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
