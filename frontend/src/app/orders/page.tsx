'use client';

import React from 'react';
import { Layout, Loading } from '@/components';
import { Container, OrdersTable } from './styles';
import { MdVisibility, MdEdit, MdDelete } from 'react-icons/md';
import { useOrders } from '@/hooks/useOrders';

type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled';

const statusLabels: Record<OrderStatus, string> = {
  pending: 'Pendente',
  processing: 'Em Processamento',
  completed: 'Concluído',
  cancelled: 'Cancelado'
};

export default function Orders() {
  const { data: orders, isLoading } = useOrders();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <Container>
        <h1>Pedidos</h1>
        <OrdersTable>
          <table>
            <thead>
              <tr>
                <th>Nº do Pedido</th>
                <th>Cliente</th>
                <th>Data</th>
                <th>Valor</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.cliente}</td>
                  <td>{order.data}</td>
                  <td>R$ {order.valor.toFixed(2)}</td>
                  <td className="status">
                    <span className={order.status}>
                      {statusLabels[order.status as OrderStatus]}
                    </span>
                  </td>
                  <td>
                    <div className="actions">
                      <button className="view">
                        <MdVisibility size={16} />
                        Ver
                      </button>
                      <button className="edit">
                        <MdEdit size={16} />
                        Editar
                      </button>
                      <button className="delete">
                        <MdDelete size={16} />
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </OrdersTable>
      </Container>
    </Layout>
  );
} 