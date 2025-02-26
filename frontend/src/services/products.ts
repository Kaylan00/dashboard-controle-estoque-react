import { api } from './api';
import type { Product } from '@/types';

export const productsService = {
  getAll: async (): Promise<Product[]> => {
    const response = await api.get<Product[]>('/products');
    return response.data;
  },

  create: async (product: Omit<Product, 'id'>): Promise<Product> => {
    const response = await api.post<Product>('/products', product);
    return response.data;
  },
}; 