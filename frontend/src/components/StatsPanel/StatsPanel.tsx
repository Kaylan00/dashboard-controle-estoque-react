'use client';

import React from 'react';
import { Container, StatCard } from './styles';

interface StatsPanelProps {
  stats: {
    salesCount: number;
    lastMonthProfit: number;
    netProfit: number;
    avgOrdersPerMonth: number;
    itemsInStock: number;
  }
}

const StatsPanel: React.FC<StatsPanelProps> = ({ stats }) => {
  return (
    <>
      <StatCard>
        <h3>Nº de Vendas</h3>
        <p>{stats.salesCount}</p>
      </StatCard>
      <StatCard>
        <h3>Lucro do Último Mês</h3>
        <p>{stats.lastMonthProfit}%</p>
      </StatCard>
      <StatCard>
        <h3>Lucro Líquido</h3>
        <p>{stats.netProfit}%</p>
      </StatCard>
      <StatCard>
        <h3>Média de Pedidos/Mês</h3>
        <p>{stats.avgOrdersPerMonth}</p>
      </StatCard>
      <StatCard>
        <h3>Itens em Estoque</h3>
        <p>{stats.itemsInStock}</p>
      </StatCard>
    </>
  );
};

export default StatsPanel;
