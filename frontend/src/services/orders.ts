import { api } from './api';
import { Order } from '@/types';

export const ordersService = {
  getAll: async (): Promise<Order[]> => {
    const response = await api.get<Order[]>('/orders');
    return response.data;
  },
}; 