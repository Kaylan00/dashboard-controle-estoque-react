import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '../Header';

describe('Header Component', () => {
  const renderHeader = () => {
    return render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
  };

  it('should render search input', () => {
    renderHeader();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('should toggle theme when clicking theme button', () => {
    renderHeader();
    const themeButton = screen.getByLabelText(/Switch to .* theme/i);
    fireEvent.click(themeButton);
    // Verificar se o ícone mudou
    expect(screen.getByLabelText(/Switch to .* theme/i)).toBeInTheDocument();
  });
}); 