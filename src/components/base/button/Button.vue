<template>
  <button class="btn" :class="btnClasses" @click="ev_click" :type="type" :disabled="disabled">
    <div class="w-5 h-5 bg-color-secondary"></div>
    {{ text }}
    <div class="w-5 h-5 bg-color-secondary"></div>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary', 'link'].includes(value),
    },
    size: {
      type: String,
      default: 'medium',
      validator: value => ['large', 'medium', 'small'].includes(value),
    },
    state: {
      type: String,
      default: null,
      validator: value => ['info', 'warning', 'success', 'error'].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
      validator: value => ['button', 'submit'].includes(value),
    },
  },
  methods: {
    ev_click() {
      console.log('ev_click');
    }
  },
  computed: {
    btnClasses() {
      return [
        `btn--${this.variant}`, 
        this.state, 
        this.disabled ? 'disabled' : '',
        `btn--${this.size}`]
    }
  }
}
</script>

<style lang="scss">
@import './button.scss';
</style>