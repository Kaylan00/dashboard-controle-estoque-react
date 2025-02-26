'use client';

import React from 'react';
import { Container, Header, SaleItem } from './styles';

const topSalesData = [
  { product: 'Canecas', quantity: '2k' },
  { product: 'Xícaras', quantity: '14k' },
  { product: 'Copos', quantity: '18k' },
  { product: 'Tigelas', quantity: '10k' },
  { product: 'Garrafas', quantity: '2k' }
];

const TopSales: React.FC = () => {
  return (
    <Container>
      <Header>
        <h3>Top 5 Vendas</h3>
        <button>Ver Todos</button>
      </Header>
      <div className="sales-list">
        {topSalesData.map((item, index) => (
          <SaleItem key={index}>
            <span>{item.product}</span>
            <span>{item.quantity}</span>
          </SaleItem>
        ))}
      </div>
    </Container>
  );
};

export default TopSales; 