'use client';

import React, { useState } from 'react';
import { Layout, Loading } from '@/components';
import { Container, NewRequisitionForm, RequisitionsList, RequisitionItem } from './styles';
import { MdPerson, MdCalendarToday, MdCheck, MdClose, MdAdd, MdInventory, MdDescription } from 'react-icons/md';
import { useRequisitions } from '@/hooks/useRequisitions';

export default function Requisitions() {
  const { data: requisitions, isLoading } = useRequisitions();
  const [newRequisition, setNewRequisition] = useState({
    item: '',
    quantidade: '',
    motivo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newRequisition.item || !newRequisition.quantidade) return;

    const requisition = {
      id: Date.now(),
      solicitante: 'Usuário Atual',
      item: newRequisition.item,
      quantidade: parseInt(newRequisition.quantidade),
      data: new Date().toLocaleDateString(),
      motivo: newRequisition.motivo
    };

    // Assuming you have a function to add a new requisition
    // This is a placeholder and should be replaced with the actual implementation
    console.log('New requisition:', requisition);
    setNewRequisition({ item: '', quantidade: '', motivo: '' });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <Container>
        <h1>Requisições</h1>
        <div className="content">
          <NewRequisitionForm onSubmit={handleSubmit}>
            <h2>Nova Requisição</h2>
            <div className="field">
              <label>
                <MdInventory size={16} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} />
                Item
              </label>
              <input
                type="text"
                value={newRequisition.item}
                onChange={e => setNewRequisition(prev => ({ ...prev, item: e.target.value }))}
                placeholder="Digite o nome do item"
              />
            </div>
            <div className="field">
              <label>
                <MdAdd size={16} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} />
                Unidades
              </label>
              <input
                type="number"
                value={newRequisition.quantidade}
                onChange={e => setNewRequisition(prev => ({ ...prev, quantidade: e.target.value }))}
                placeholder="Quantidade necessária"
                min="1"
              />
            </div>
            <div className="field">
              <label>
                <MdDescription size={16} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} />
                Observações (Opcional)
              </label>
              <textarea
                value={newRequisition.motivo}
                onChange={e => setNewRequisition(prev => ({ ...prev, motivo: e.target.value }))}
                placeholder="Descreva o motivo da requisição"
              />
            </div>
            <button type="submit">
              <MdCheck size={20} />
              Enviar Requisição
            </button>
          </NewRequisitionForm>

          <RequisitionsList>
            <h2>Requisições Pendentes</h2>
            <div className="list">
              {requisitions?.map(requisition => (
                <RequisitionItem key={requisition.id}>
                  <div className="info">
                    <h3> Produto - 10 unidades</h3>
                    <div className="details">
                      <span>
                        <MdPerson size={16} />
                      </span>
                      <span>
                        <MdCalendarToday size={16} />
                      </span>
                    </div>
                    <p></p>
                  </div>
                  <div className="actions">
                    <button className="approve">
                      <MdCheck size={20} />
                    </button>
                    <button className="reject">
                      <MdClose size={20} />
                    </button>
                  </div>
                </RequisitionItem>
              ))}
            </div>
          </RequisitionsList>
        </div>
      </Container>
    </Layout>
  );
} 