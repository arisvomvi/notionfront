<template>
  <div>
    
    <gng-button v-for="i in 4" text="mybutton" />


  </div>
</template>

<script>
import { fetchPage } from '@/services/page'

// import MyButton from '../components/base/Button.vue'

export default {
  // components: { MyButton },
  name: 'Home',
  // data() {
  //   return {
  //     pageId: '8a4268397a4545dca8910d682c84715f',
  //   }
  // },
  // created() {
  //   fetchPage(this.pageId).then(response => {
  //     console.log('response', response);
  //   });
  // },
  methods: {
  },
};
</script>
