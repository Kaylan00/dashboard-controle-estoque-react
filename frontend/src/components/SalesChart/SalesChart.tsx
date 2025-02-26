'use client';

import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Container, Header, TimeFilter } from './styles';

// Registrar os componentes necessários do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type TimeFilter = '1M' | '6M' | '1Y';

const SalesChart: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [activeFilter, setActiveFilter] = useState<TimeFilter>('1M');

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          color: isDarkMode ? '#9d97b5' : '#94a3b8',
          font: {
            size: 11
          }
        }
      },
      y: {
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
          drawBorder: false
        },
        ticks: {
          color: isDarkMode ? '#9d97b5' : '#94a3b8',
          font: {
            size: 11
          },
          padding: 10
        },
        border: {
          dash: [5, 5]
        }
      }
    },
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 4,
        borderWidth: 2,
        backgroundColor: isDarkMode ? '#6d28d9' : '#7fb9b1',
        borderColor: isDarkMode ? '#1c1827' : '#ffffff'
      }
    }
  };

  // Dados mockados para cada filtro
  const chartData = {
    '1M': [65, 85, 45, 75, 55, 80, 60],
    '6M': [45, 65, 75, 85, 95, 80],
    '1Y': [55, 65, 75, 85, 95, 85, 75, 65, 55, 45, 35, 25]
  };

  const labels = {
    '1M': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    '6M': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    '1Y': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };

  const data = {
    labels: labels[activeFilter],
    datasets: [
      {
        data: chartData[activeFilter],
        fill: true,
        backgroundColor: isDarkMode 
          ? 'rgba(109, 40, 217, 0.1)'
          : 'rgba(127, 185, 177, 0.1)',
        borderColor: isDarkMode 
          ? '#6d28d9'
          : '#7fb9b1',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: isDarkMode ? '#6d28d9' : '#7fb9b1',
        pointBorderColor: isDarkMode ? '#1c1827' : '#ffffff'
      }
    ]
  };

  return (
    <Container>
      <Header>
        <h3>Média de Vendas</h3>
        <TimeFilter>
          {(['1M', '6M', '1Y'] as TimeFilter[]).map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? 'active' : ''}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </TimeFilter>
      </Header>
      <div className="chart-container">
        <Line options={options} data={data} height={200} />
      </div>
    </Container>
  );
};

export default SalesChart; 