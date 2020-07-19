<template>
  <div class="dialog-wrapper">
    <template v-if="currentDialog === 'SignInDialog'">
      <SignInDialog @set-dialog="changeDialog" />
    </template>
    <template v-if="currentDialog === 'RegistrationDialog'">
      <RegistrationDialog @set-dialog="changeDialog" />
    </template>
    <template v-if="currentDialog === 'RecoveryDialog'">
      <RecoveryPasDialog @set-dialog="changeDialog" />
    </template>
    <template v-if="currentDialog === 'SuccessDialog'">
      <SuccessDialog @set-dialog="changeDialog" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import RegistrationDialog from '@/components/access/RegistrationDialog.vue';
import SignInDialog from '@/components/access/SignInDialog.vue';
import RecoveryPasDialog from '@/components/access/RecoveryPasDialog.vue';
import SuccessDialog from '@/components/access/SuccessDialog.vue';
export default Vue.extend({
  name: 'DialogWrapper',
  components: {
    RecoveryPasDialog,
    RegistrationDialog,
    SuccessDialog,
    SignInDialog,
  },
  data () {
    return {
      currentDialog: 'SignInDialog',
    };
  },
  methods: {
    changeDialog (newDialog : string): void {
      this.currentDialog = newDialog;
    },
  },
});
</script>
