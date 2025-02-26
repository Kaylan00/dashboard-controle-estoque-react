import { api } from './api';

export interface Requisition {
  id: string;
  item: string;
  units: number;
  notes?: string;
  status: 'pending' | 'approved' | 'rejected';
}

export const requisitionService = {
  getAll: async () => {
    const response = await api.get<Requisition[]>('/requisitions');
    return response.data;
  },

  create: async (data: Omit<Requisition, 'id' | 'status'>) => {
    const response = await api.post<Requisition>('/requisitions', data);
    return response.data;
  },

  approve: async (id: string) => {
    const response = await api.patch<Requisition>(`/requisitions/${id}/approve`);
    return response.data;
  },

  reject: async (id: string) => {
    const response = await api.patch<Requisition>(`/requisitions/${id}/reject`);
    return response.data;
  },

  delete: async (id: string) => {
    await api.delete(`/requisitions/${id}`);
  }
}; 