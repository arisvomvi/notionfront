<template>
  <div class="form-control" :class="formControlClasses">
    <gng-form-element :state="state" v-bind="$attrs" />
    <div class="field-message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'FormControl',
  inheritAttrs: false,
  props: {
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
  computed: {
    formControlClasses() {
      let classes = [];

      classes.push(this.state);
      
      return classes;
    },
  },
}
</script>

<style lang="scss">
@import './form-control.scss';
</style>