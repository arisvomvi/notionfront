<template>

{{ fields }}

<gng-form-control v-for="field in fields" v-bind="field"
  
  
  v-model="text" />
  <!-- :type="field.type" 
  state="warning" 
  :label="field.name" 
  
  placeholder="text placeholder" 
  :message="field.value" -->

<!-- 
{{ code }}

{{ text }}
    <gng-form-element class="koko" type="password" label="text" v-model="text" placeholder="text placeholder" state="info" />

    {{ checkbox }}
    <gng-form-element type="checkbox" state="info" label="checkbox" v-model="checkbox" value="koko" />

    <gng-form-control class="koko" type="text" state="warning" label="text" v-model="text" placeholder="text placeholder" message="text message" />
    <gng-form-control type="password" state="error" label="text" v-model="text" placeholder="text placeholder" message="text message" disabled /> -->

</template>

<script>
import { ref } from 'vue';
import { inject } from 'vue';
// import Navigation from './components/Navigation.vue';
// import { fetchPage, updatePage, fetchPageProperty, createPage } from '@services/page.js'
// import {fetchBlock, fetchBlockChildren, appendBlock, updateBlock, deleteBlock } from '@services/block.js'
// import {fetchDatabase, queryDatabase } from '@services/databases.js'
export default {
  components: {
    // Navigation
  },
  setup() {
    const pages = inject('pages', []);
    return {
      pages,
      formfields: [],
    };
  },
  mounted() {
    // fetchBlockChildren(this.adminId).then(response => {
    //   console.log('fetchBlockChildren',response);
    //   this.adminBlockChildren = response.results;
    // });

    // fetchDatabase('11db4ea9-8b62-8017-9992-e56740d566d0').then(response => {
    //     console.log('fetchDatabase',response);
    //   });

    // queryDatabase('11db4ea9-8b62-8017-9992-e56740d566d0').then(response => {
    //   console.log('queryDatabase');
      
    //   console.log(response);
    // });

    // fetchBlockChildren('11db4ea9-8b62-8017-9992-e56740d566d0').then(response => {
    //   console.log(response);
    //   this.formfields = response.results;
    // });

  },
  data() {
    return {
      adminId: '8a4268397a4545dca8910d682c84715f',
      adminBlockChildren: [],

      text: null,
      textarea: null,
      checkbox: [],
      radio: null,
      color: null,
      date: null,
      datetime: null,
      email: null,
      month: null,
      number: null,
      password: null,
      range: null,
      tel: null,
      time: null,
      week: null,
      url: null,
      button: null,
      file: null,
      hidden: null,
      image: null,
      reset: null,
      search: null,
      submit: null
    };
  },
  computed: {
    // fields() {
    //   let x = this.adminBlockChildren.find(el => el.type == 'code');
    //   if (x) {
    //     let str = x.code.text[0].text.content
    //     console.log(str);
        
    //     let fields = JSON.parse(str)
    //     console.log(fields);
    //     return fields
    //   }
    //   return []
    // }
  },

};
</script>

<style lang="scss">

 .yp > * {
  margin-bottom: 20px;
 }
</style>
