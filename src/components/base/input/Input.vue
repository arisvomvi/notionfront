<template>
  <div class="input-wrap" :class="inputClasses">
    <label :for="$.uid">{{ label }}</label>

    <template v-if="type === 'checkbox'">
      <input 
        :id="$.uid" 
        type="checkbox" 
        :value="value" 
        :checked="isChecked" 
        :name="name"
        @change="ev_change" 
        v-bind="$attrs" 
      />
    </template>

    <template v-else-if="type === 'radio'">
      <input 
        :id="$.uid" 
        type="radio" 
        :value="value" 
        :checked="value === modelValue" 
        :name="name"
        @change="ev_radio" 
        v-bind="$attrs" 
      />
    </template>

    <template v-else-if="type === 'textarea'">
      <textarea 
      :id="$.uid" 
      :value="modelValue" 
      @input="ev_input" v-bind="$attrs" ></textarea>
    </template>

    <template v-else>
      <input 
        :id="$.uid" 
        :type="type" 
        :value="modelValue" 
        :name="name"
        @input="ev_input" 
        v-bind="$attrs" 
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'Input',
  emits: ['update:modelValue'],
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Boolean, Number, Array],
      default: '',
    },
    label: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
      // validator: value => ['text', 'checkbox', 'radio', 'number', 'color', 'textarea'].includes(value),
    },
    name: {
      type: String,
    },
    value: {
      type: [String, Number],
      default: null,
    },
  },
  computed: {
    isChecked() {
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.includes(this.value);  // For value-based checkboxes
      } else {
        return this.modelValue === true;  // For true/false checkboxes
      }
    },
    inputClasses() {
      return [`type-${this.type}`];
    },
  },
  methods: {
    ev_input(e) {
      this.$emit('update:modelValue', e.target.value);
    },
    ev_change(e) {
      const isChecked = e.target.checked;

      if (Array.isArray(this.modelValue)) {
        // For checkboxes that operate on values (like 'Jack', 'John')
        if (isChecked) {
          console.log([...this.modelValue, this.value]);
          this.$emit('update:modelValue', [...this.modelValue, this.value]);
        } else {
          const updatedValues = this.modelValue.filter(val => val !== this.value);
          console.log(updatedValues);
          this.$emit('update:modelValue', updatedValues);
        }
      } else {
        // For checkboxes that emit true/false
        this.$emit('update:modelValue', isChecked);
      }
    },
    ev_radio(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>

<style lang="scss">
@import './input.scss';
</style>
