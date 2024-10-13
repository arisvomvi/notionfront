<template>
  <div>
    Hellos: {{ text }}

    <!-- Example usage of gng-form-control component -->
    <gng-form-control state="error" message="pipi" label="mylae" v-model="text" />
  </div>
</template>

<script>
import { ref, inject } from 'vue';

export default {
  setup() {
    // Injected dependencies or props
    const pages = inject('pages', []); // Injected from parent context

    return {
      pages,  // Injected data
      formfields: [], // Empty array for form fields
    };
  },

  mounted() {
    console.log('Component mounted');

    // Example of fetching data or making API calls can go here
    // Uncomment and adjust the following as needed
    // fetchDatabase('DATABASE_ID').then(response => {
    //   console.log('fetchDatabase', response);
    // });
  },

  data() {
    return {
      text: null, // Example text data for form input
      adminId: '8a4268397a4545dca8910d682c84715f', // Your adminId (if needed)
      adminBlockChildren: [], // Placeholder for block children (if needed)
    };
  },
};
</script>

<style lang="scss">
.yp > * {
  margin-bottom: 20px;
}
</style>
