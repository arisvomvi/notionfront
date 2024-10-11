import GngFormControl from '@components/base/form-control/FormControl.vue'; // Correctly import your component

export default {
  title: 'Default/Base/FormControl',
  component: GngFormControl,
  tags: ['autodocs'],
  args: {
    type: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
    icon: '',
    iconRight: 'ds',
    message: 'Message',
  },
  argTypes: {
    type: { control: 'select', options: ['text', 'password', 'textarea', 'checkbox', 'radio', 'range'] },
    state: { control: 'select', options: ['info', 'warning', 'error', 'success'] },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
};

// const Template = args => ({
//   components: { GngFormControl },
//   setup() {
//     return { args };
//   },
//   template: `
//     <GngFormControl v-bind="args" />
//   `,
// });

// export const Text = Template.bind({});
// Text.args = {};

export const Text = {
  args: {
    label: 'Label',
  },
};
