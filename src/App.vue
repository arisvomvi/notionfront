<template>
  <div>
    YO: {{ text }}

    <gng-form-control state="error" message="pipi" label="mylae" v-model="text" icon="ko" />

    <gng-slider />
  </div>
</template>

<script>
import { ref, inject } from 'vue';

export default {

  mounted() {
    console.log('Component mounted');
  },

  data() {
    return {
      text: null,
     
    };
  },
};
</script>

<style lang="scss">
</style>
