import { useQuery } from '@tanstack/react-query';
import { dashboardService } from '@/services/dashboard';

const mockStats = {
  salesCount: 0,
  lastMonthProfit: 0,
  netProfit: 0,
  avgOrdersPerMonth: 0,
  itemsInStock: 0
};

export function useDashboardStats() {
  return useQuery({
    queryKey: ['dashboard', 'stats'],
    queryFn: dashboardService.getStats,
    initialData: mockStats,
    retry: false,
    refetchOnWindowFocus: false,
  });
}

export function useSalesData() {
  return useQuery({
    queryKey: ['dashboard', 'sales'],
    queryFn: dashboardService.getSalesData,
  });
}

export function useTopSales() {
  return useQuery({
    queryKey: ['dashboard', 'topSales'],
    queryFn: dashboardService.getTopSales,
  });
} 