'use client';

import React from 'react';
import {
  Layout,
  Header,
  StatsPanel,
  SalesChart,
  TopSales,
  InvoicesProgress,
  ProductsList,
  RecentActivities,
  RequisitionList,
  Loading
} from '@/components';
import { DashboardContainer, StatsGrid, ChartsContainer, BottomGrid } from './styles';
import { useDashboardStats } from '@/hooks/useDashboard';

export default function Dashboard() {
  const { data: stats, isLoading } = useDashboardStats();

  if (isLoading || !stats) {
    return <Loading />;
  }

  return (
    <Layout>
      <DashboardContainer>
        <Header />
        
        <StatsGrid>
          <StatsPanel stats={stats} />
        </StatsGrid>

        <ChartsContainer>
          <SalesChart />
          <TopSales />
          <InvoicesProgress />
        </ChartsContainer>

        <BottomGrid>
          <RequisitionList />
          <div className="right-panel">
            <ProductsList />
            <RecentActivities />
          </div>
        </BottomGrid>
      </DashboardContainer>
    </Layout>
  );
} 