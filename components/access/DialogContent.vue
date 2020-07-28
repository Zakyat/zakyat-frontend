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
import RegistrationDialog from '@/components/access/RegistrationDialog.vue';
import SignInDialog from '@/components/access/SignInDialog.vue';
import RecoveryPasDialog from '~/components/access/PasswordRecoveryDialog.vue';
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
