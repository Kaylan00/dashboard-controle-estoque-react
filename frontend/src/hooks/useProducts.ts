import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productsService } from '@/services/products';
import type { Product } from '@/types';

const mockProducts = []; // Array vazio inicial

export function useProducts() {
  const queryClient = useQueryClient();

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: productsService.getAll,
    initialData: mockProducts,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const addProduct = useMutation({
    mutationFn: productsService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  return {
    products,
    isLoading,
    addProduct,
  };
} 