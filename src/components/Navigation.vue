<template>
  <nav>
    <ul>
      <li v-for="page in pages" :key="page.id">
        <router-link :to="{ name: page.properties.Name.title[0].plain_text }">{{ page.properties.Name.title[0].plain_text }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pages: {
      type: Array,
      required: true
    }
  },
  created() {
    // console.log('nav', this.pages);
  },
  watch: {

  }
};
</script>

<style>
/* nav {
  outline: 1px solid red;;
  
  padding: 8px;
}
nav ul {
  display: flex;
  align-items: center;
  gap: 16px;
  list-style-type: none;
} */
</style>
