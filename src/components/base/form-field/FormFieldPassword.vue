<template>
  <gng-form-field v-bind="$attrs">
    <template #input>
      <gng-input v-bind="{ ...$attrs, type: typeRef }" />
    </template>

    <template #icon-right>
      <div class="icon icon--right" @click="toggle_password"></div>
    </template>
  </gng-form-field>
</template>

<script>
export default {
  name: 'FormFieldPassword',
  inheritAttrs: false,
  data: () => ({
    visible: false,
  }),
  computed: {
    typeRef() {
      return this.visible ? 'text' : this.$attrs.type;
    },
    visibilityIcon() {
      return this.visible ? 'visible' : 'hidden';
    },
  },
  methods: {
    toggle_password() {
      this.visible = !this.visible;
    }, 
  },
}
</script>