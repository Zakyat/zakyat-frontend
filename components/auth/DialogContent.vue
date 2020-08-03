<template>
  <div class="dialog-wrapper">
    <SignInDialog v-if="currentDialog === 'SignInDialog'" @set-dialog="changeDialog" />
    <RegistrationDialog v-else-if="currentDialog === 'RegistrationDialog'" @set-dialog="changeDialog" />
    <RecoveryPasDialog v-else-if="currentDialog === 'RecoveryDialog'" @set-dialog="changeDialog" />
    <SuccessDialog v-else @set-dialog="changeDialog" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import RegistrationDialog from '@/components/auth/RegistrationDialog.vue';
import SignInDialog from '@/components/auth/SignInDialog.vue';
import RecoveryPasDialog from '@/components/auth/PasswordRecoveryDialog.vue';
import SuccessDialog from '@/components/auth/SuccessDialog.vue';

export default Vue.extend({
  name: 'DialogContent',
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
