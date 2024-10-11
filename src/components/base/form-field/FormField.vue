<template>
  <div class="form-field" :class="fieldClasses">
    <slot name="icon">
      <div v-if="icon" class="icon icon--left" @click="icon_click"></div>
    </slot>

    <slot name="input">
      <gng-input v-bind="$attrs" />
    </slot>
      
    <slot name="icon-right">
      <div v-if="iconRight" class="icon icon--right"></div>
    </slot>
      
  </div>
</template>

<script>
export default {
  name: 'FormField',
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      default: null,
    },
    iconRight: {
      type: String,
      default: null,
    },
    state: {
      type: String,
      default: null,
      validator: value => ['info', 'warning', 'success', 'error'].includes(value),
    }
  },
  computed: {
    fieldClasses() {
      let classes = [];
      if (this.$attrs.disabled === true || this.$attrs.disabled === '') {
        classes.push('disabled');
      }
      if (this.$attrs?.type) {
        classes.push(`form-field--${this.$attrs?.type}`)
      }
      if (this.state) {
        classes.push(`${this.state}`);
      }
      return classes;
    }
  },
  methods: {
    icon_click(e) {
      console.log('icon_click', e);
    }
  }
}
</script>

<style lang="scss">
@import './form-field.scss';
</style>
