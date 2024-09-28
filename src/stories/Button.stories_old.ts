// import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '@components/base/button/Button.vue'

const meta = {
  title: 'default/base/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // size: { control: 'select', options: ['small', 'medium', 'large'] },
    // backgroundColor: { control: 'color' },
  },
  args: {
    // primary: false,
    // // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
  // args: {
  //   // text: "clickme"
  // },
};

// export const Secondary: Story = {
//   args: {
//     primary: false,
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     label: 'Button',
//     size: 'large',
//   },
// };

// export const Small: Story = {
//   args: {
//     label: 'Button',
//     size: 'small',
//   },
// };
