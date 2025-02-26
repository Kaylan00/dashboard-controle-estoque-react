import { api } from './api';

export interface DashboardStats {
  salesCount: number;
  lastMonthProfit: number;
  netProfit: number;
  avgOrdersPerMonth: number;
  itemsInStock: number;
}

export const dashboardService = {
  getStats: async (): Promise<DashboardStats> => {
    const response = await api.get('/dashboard/stats');
    return response.data;
  },

  getSalesData: async () => {
    const response = await api.get('/dashboard/sales');
    return response.data;
  },

  getTopSales: async () => {
    const response = await api.get('/dashboard/top-sales');
    return response.data;
  },
}; 