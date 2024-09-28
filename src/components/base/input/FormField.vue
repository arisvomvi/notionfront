<template>
  <div class="form-field"> 
    <div v-if="iconLeft" class="icon-left"></div>
    <gng-input v-model="inputValue" v-bind="$attrs" />
    <div v-if="iconRight" class="icon-right"></div>
  </div>
</template>

<script>
export default {
  name: 'FormField',
  emits: ['update:modelValue'],
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    iconLeft: {
      type: String,
      default: null,
    },
    iconRight: {
      type: String,
      default: null,
    },
  },

  // mounted() {
  //   console.log(this);
  //   console.log('attrs',this.$attrs);
  //   console.log('props',this.$props);
  // },

  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    },
  }
}
</script>
