import type { Meta, StoryObj } from '@storybook/react';
import StatsPanel from './StatsPanel';

const meta: Meta<typeof StatsPanel> = {
  title: 'Components/StatsPanel',
  component: StatsPanel,
  args: {
    stats: {
      salesCount: 2225,
      lastMonthProfit: 57.43,
      netProfit: 61.37,
      avgOrdersPerMonth: 43,
      itemsInStock: 96
    }
  }
};

export default meta;
type Story = StoryObj<typeof StatsPanel>;

export const Default: Story = {};

export const LowNumbers: Story = {
  args: {
    stats: {
      salesCount: 125,
      lastMonthProfit: 7.43,
      netProfit: 11.37,
      avgOrdersPerMonth: 13,
      itemsInStock: 26
    }
  }
};

export const HighNumbers: Story = {
  args: {
    stats: {
      salesCount: 12225,
      lastMonthProfit: 157.43,
      netProfit: 161.37,
      avgOrdersPerMonth: 143,
      itemsInStock: 196
    }
  }
}; 