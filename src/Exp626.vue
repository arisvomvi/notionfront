<template>
  <div class="p-4">
    YO: {{ text }}
dsds
    <gng-form-control label="dsdsdsd"  />
    
<!-- <gng-button /> -->
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
