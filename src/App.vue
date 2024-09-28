<template>
  <div class="p-4">

    {{ mytext }}
    <gng-input label="label" v-model="mytext"  placeholder="sdf" />

    <gng-form-field 
      icon-left="s" 
      icon-right="s" 
      v-model="mytext"
      placeholder="aaaasd"
      label="kook"
      disabled
       />

    <gng-form-control 
      icon-left="s" 
      v-model="mytext" 
      label="kiki" state="info" message="kmessgageej" 
      readonly
      type="text" /> 
    
    <!-- <gng-button text="button" size="small" />
    <gng-button text="button" />
    <gng-button text="button" size="large" />
    <gng-button text="button" variant="secondary" />

    <gng-button text="button" state="warning" />
    <gng-button text="button" state="info" />
    <gng-button text="button" state="error" />
    <gng-button text="button" state="success" />

    <gng-button text="button" :disabled="true" />
    <gng-button text="button" variant="secondary" :disabled="true" />
    <gng-button text="button" state="success" :disabled="true" />

    
 
    <gng-breadcrumb /> -->

    

    <!-- <gng-form-control v-model="mytext" disabled /> -->
    <!-- <gng-input value="somee" /> -->
    <!-- <gng-progress /> -->

    <!-- <router-view></router-view> -->
    <!-- <header>
      <Navigation :pages="pages" />
    </header>
    <main>
      
    </main>
    <footer>
      footer
    </footer> -->
  </div>
</template>

<script>
import { ref } from 'vue';
import { inject } from 'vue';
import Navigation from './components/Navigation.vue';

export default {
  components: {
    Navigation
  },
  setup() {
    const pages = inject('pages', []);
    return {
      pages
    };
  },
  data() {
    return {
      mytext: 'foo',
      // id: '8a4268397a4545dca8910d682c84715f',
    }
  },
};
</script>

<style lang="scss">

</style>
