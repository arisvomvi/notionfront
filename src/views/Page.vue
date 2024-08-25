<template>
  <div class="article-page ">
    <figure class="cover" v-if="cover">
      <img :src="cover" alt="">
    </figure>
    <h1>{{ pageData.properties.Name.title[0].plain_text }}</h1>
    {{ pageData?.icon.emoji }}
    <!-- <div v-html="pageData.properties.Content.rich_text[0].text.content"></div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    pageData: {
      type: Object as PropType<any>, // Use the appropriate type here
      required: true
    }
  },
  created() {

  },
  mounted() {
    console.log(this.pageData);
    
  },
  computed: {
    cover() {
      return this.pageData?.cover?.external?.url ?? null
    }
  },
});
</script>

<style lang="scss">
@import '../styles/pages/article.scss';
// .cover {
//   height: 400px;
// }
// .cover img {
//   object-fit: cover;
//   width: 100%;
//   height: 100%;
// }
</style>
