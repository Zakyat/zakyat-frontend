<template>
  <v-app-bar color="#00AC00" flat height="350">
    <v-container>
      <v-row class="pa-4" row>
        <h1>{{ $t('Make_sadaka') }}</h1>
        <p style="width: 85%;">
          {{ $t('Make_sadaka_details') }}
        </p>
      </v-row>
      <v-layout row wrap>
        <v-flex md3 xs12 sm12>
          <v-text-field
            id="text-input"
            rounded
            dence
            placeholder="Enter the amount, ₽"
            solo
            color="white"
            background-color="transparent"
          />
        </v-flex>
        <v-flex md6 xs8 sm8 row>
          <v-radio-group row>
            <v-radio
              v-for="n in [1,5,10,50,100,1000]"
              :key="n"
              class="whitelabel"
              :label="`${n} ₽`"
              :value="n"
              color="white"
            />
          </v-radio-group>
        </v-flex>
        <v-btn rounded dark color="secondary">
          <span>{{ $t('donate') }}</span>
        </v-btn>
      </v-layout>
    </v-container>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped>
h1 {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 43px;
  color:#FFF;
}
p,.whitelabel{
  color:#FFF;
}
.border-rounded{
border: 1px solid #fff;
border-radius: 20px;
}
.whitelabel /deep/ label {
  color:white;
  }
.theme--light.v-input input{
  color: white!important;
}
span{
  color:black
}
.v-input--radio-group__input{
padding: 12px 24px;

}
.v-input__slot::before {
  border: 1px solid #FFFFFF !important;
  box-sizing: border-box;
  border-radius:25px;
 }

</style>
