import { useQuery } from '@tanstack/react-query';
import { ordersService } from '@/services/orders';

const mockOrders = []; // Array vazio inicial

export function useOrders() {
  return useQuery({
    queryKey: ['orders'],
    queryFn: ordersService.getAll,
    initialData: mockOrders,
    retry: false,
    refetchOnWindowFocus: false,
  });
} 