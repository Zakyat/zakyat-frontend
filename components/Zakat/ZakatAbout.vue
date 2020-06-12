<template>
  <v-flex xs12 md6 class="text-center">
        <video rounded height="340px" controls>
          <source
            :src="require('@/assets/videos/aboutUs.mp4')"
            type="video/mp4"
          >Your browser does not support HTML5 video.
        </video>
      </v-flex>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  
})
</script>