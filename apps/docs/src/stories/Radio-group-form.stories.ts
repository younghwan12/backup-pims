import { Meta, StoryObj } from '@storybook/react';
import { RadioGroupFormDemo } from '../demo/radio-group-form-demo';

const meta = {
  title: 'Shadcn/Form',
  component: RadioGroupFormDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroupFormDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

//render componente
export const RadioGroupForm: Story = {
  args: {},
};
