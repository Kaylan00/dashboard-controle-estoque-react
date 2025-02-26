import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { requisitionService } from '@/services/requisition';

const mockRequisitions = []; // Array vazio inicial

export function useRequisitions() {
  return useQuery({
    queryKey: ['requisitions'],
    queryFn: requisitionService.getAll,
    initialData: mockRequisitions,
    retry: false,
    refetchOnWindowFocus: false,
  });
}

export function useCreateRequisition() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: requisitionService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['requisitions'] });
    },
  });
}

export function useApproveRequisition() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: requisitionService.approve,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['requisitions'] });
    },
  });
}

export function useRejectRequisition() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: requisitionService.reject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['requisitions'] });
    },
  });
} 