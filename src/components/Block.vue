<template>
  <div class="block">
    <div>{{ block.type }}</div>
    <div>{{ blockContent  }}</div>
  </div>
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      default: () => ({}),
    }
  },
  data() {
    return {

    }
  },
  computed: {
    blockContent() {
      // Safely access the content based on the block type
      return this.block[this.block.type]?.rich_text || 'No content';
    },
  },
}
</script>

<style scoped>
.block {
  outline: 1px solid red;
  padding: 16px;;
  margin: 0 12px;
}
</style>