<template>
  <div class="form-control">
    <gng-form-field v-model="fieldValue" v-bind="$attrs"/>
    <div class="field-message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'FormControl',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: null,
    },
    state: {
      type: String,
      default: null,
      validator: value => ['info', 'warning', 'success', 'error'].includes(value),
    },
  },
  emits: ['update:modelValue'],
  computed: {
    fieldValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  }
}
</script>
