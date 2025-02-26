import { render, screen } from '@testing-library/react';
import StatsPanel from '../StatsPanel';

const mockStats = {
  salesCount: 2225,
  lastMonthProfit: 57.43,
  netProfit: 61.37,
  avgOrdersPerMonth: 43,
  itemsInStock: 96
};

describe('StatsPanel Component', () => {
  it('should render all stats correctly', () => {
    render(<StatsPanel stats={mockStats} />);
    
    expect(screen.getByText('2225')).toBeInTheDocument();
    expect(screen.getByText('57.43%')).toBeInTheDocument();
    expect(screen.getByText('61.37%')).toBeInTheDocument();
    expect(screen.getByText('43')).toBeInTheDocument();
    expect(screen.getByText('96')).toBeInTheDocument();
  });

  it('should apply profit class to profit values', () => {
    render(<StatsPanel stats={mockStats} />);
    
    const profitElements = screen.getAllByText(/%$/);
    profitElements.forEach(element => {
      expect(element).toHaveClass('profit');
    });
  });
}); 