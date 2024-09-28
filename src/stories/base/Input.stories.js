import { fn } from '@storybook/test';
import Input from '@components/base/input/Input.vue';

export default {
  title: 'default/base/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    type: { control: 'select', options: ['button', 'submit'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    state: { control: 'select', options: ['info', 'warning', 'error', 'success'] },
  },
  args: {
    text: '',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    type: 'button',
    onClick: fn(),
  },
};

export const Primary = {
  args: {
    text: 'button',
  },
};
