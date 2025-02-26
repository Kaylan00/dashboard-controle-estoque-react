import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import SalesChart from '../SalesChart';

describe('SalesChart Component', () => {
  const renderChart = () => {
    return render(
      <ThemeProvider>
        <SalesChart />
      </ThemeProvider>
    );
  };

  it('should render title correctly', () => {
    renderChart();
    expect(screen.getByText('Avg Sales')).toBeInTheDocument();
  });

  it('should render time filter buttons', () => {
    renderChart();
    expect(screen.getByText('1M')).toBeInTheDocument();
    expect(screen.getByText('6M')).toBeInTheDocument();
    expect(screen.getByText('1Y')).toBeInTheDocument();
  });

  it('should highlight active time filter', () => {
    renderChart();
    const activeButton = screen.getByText('1M');
    expect(activeButton).toHaveClass('active');
  });
}); 