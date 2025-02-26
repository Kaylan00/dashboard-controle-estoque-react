import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { ThemeProvider } from '@/contexts/ThemeContext';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {}; 