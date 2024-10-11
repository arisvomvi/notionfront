import GngFormElement from '@components/base/form-element/FormElement.vue'; // Correctly import your component

export default {
  title: 'Default/Base/FormElement',
  component: GngFormElement,
  tags: ['autodocs'],
  args: {
    type: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
    icon: '',
    iconRight: 'ds',
  },
  argTypes: {
    type: { control: 'select', options: ['text', 'password', 'textarea', 'checkbox', 'radio', 'range'] },
    state: { control: 'select', options: ['info', 'warning', 'error', 'success'] },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
};

const Template = args => ({
  components: { GngFormElement },
  setup() {
    return { args };
  },
  template: `
    <GngFormElement v-bind="args" />
  `,
});

// export const Text = Template.bind({});
// Text.args = {};

export const Text = {
  args: {
    label: 'Label',
  },
};
