<template>
  <div>
    <header>
      <Navigation :pages="pages" />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      footer
    </footer>
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
      // id: '8a4268397a4545dca8910d682c84715f',
    }
  },
};
</script>

<style>

</style>
