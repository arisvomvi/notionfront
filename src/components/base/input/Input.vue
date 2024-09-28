<template>
  <div class="input-text">
    <label for="demoinput">{{ label }}</label>
    <input id="demoinput" :type="type" :value="modelValue" @input="oninput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: 'Input',
  emits: ['update:modelValue'],
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      default: '',
      required: true,
    },
    label: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  mounted() {
    console.log(this);
    // console.log('attrs',this.$attrs);
    // console.log('props',this.$props);
  },
  methods: {
    oninput(e) {
      console.log(e.target.value);
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style lang="scss">
@import './input.scss';
</style>