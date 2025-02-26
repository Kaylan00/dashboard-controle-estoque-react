'use client';

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Container, Header, InvoiceInfo } from './styles';
import { useTheme } from '@/contexts/ThemeContext';
import 'react-circular-progressbar/dist/styles.css';

interface InvoicesProgressProps {
  invoiceNumber?: string;
  totalAmount?: string;
  percentage?: number;
  date?: string;
}

const InvoicesProgress: React.FC<InvoicesProgressProps> = ({
  invoiceNumber = '000000',
  totalAmount = 'R$ 0',
  percentage = 0,
  date = '--/--/----'
}) => {
  const { isDarkMode } = useTheme();

  return (
    <Container>
      <Header>
        <h3>Faturas</h3>
        <button>Este mês</button>
      </Header>
      <InvoiceInfo>
        <div className="progress">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: '1.5rem',
              pathColor: isDarkMode ? '#6d28d9' : '#7fb9b1',
              textColor: isDarkMode ? '#ffffff' : '#2c3e50',
              trailColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            })}
          />
        </div>
        <div className="info">
          <span className="number">#{invoiceNumber}</span>
          <span className="amount">{totalAmount}</span>
          <span className="date">{date}</span>
        </div>
      </InvoiceInfo>
    </Container>
  );
};

export default InvoicesProgress; 