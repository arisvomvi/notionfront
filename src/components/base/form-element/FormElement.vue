<template>
  <component :is="componentType" v-bind="$attrs" /> 
</template>

<script>
export default {
  name: 'FormElement',
  inheritAttrs: false,
  computed: {
    componentType() {
      return this.$attrs.type === 'password' ? 'gng-form-field-password' : 'gng-form-field';
    }
  }
}
</script>