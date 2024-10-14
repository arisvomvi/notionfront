<template>
  <div>
    Hellos: {{ text }}

    <gng-form-control state="error" message="pipi" label="mylae" v-model="text" />
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
