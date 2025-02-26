'use client';

import React, { useState, useEffect } from 'react';
import { MdAdd, MdCheck, MdClose, MdInventory, MdNumbers, MdNotes } from 'react-icons/md';
import { Container, Header, ListItem, Actions } from './styles';
import { toast } from 'react-toastify';

interface Requisition {
  id: string;
  item: string;
  units: number;
  notes: string;
}

const RequisitionList: React.FC = () => {
  const [requisitions, setRequisitions] = useState<Requisition[]>([]); // Lista de requisições começa vazia
  const [newItem, setNewItem] = useState('');
  const [newUnits, setNewUnits] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    item: '',
    units: ''
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const validateInputs = () => {
    const newErrors = {
      item: '',
      units: ''
    };

    if (!newItem.trim()) {
      newErrors.item = 'Nome do item é obrigatório';
    }

    if (!newUnits || Number(newUnits) <= 0) {
      newErrors.units = 'Quantidade deve ser maior que zero';
    }

    setErrors(newErrors);
    return !newErrors.item && !newErrors.units;
  };

  const handleAddRequisition = () => {
    if (!validateInputs()) return;

    const newRequisition: Requisition = {
      id: String(Date.now()),
      item: newItem,
      units: Number(newUnits),
      notes: ''
    };

    setRequisitions(prev => [...prev, newRequisition]);
    setNewItem('');
    setNewUnits('');
    toast.success('Requisição adicionada com sucesso');
  };

  const handleApprove = (id: string) => {
    setRequisitions(prev => prev.filter(req => req.id !== id));
    toast.success('Requisição aprovada com sucesso');
  };

  const handleReject = (id: string) => {
    setRequisitions(prev => prev.filter(req => req.id !== id));
  };

  const handleRemoveAll = () => {
    setRequisitions([]);
  };

  const handleUpdateNotes = (id: string, notes: string) => {
    setRequisitions(prev => 
      prev.map(req => 
        req.id === id ? { ...req, notes } : req
      )
    );
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Simular salvamento
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Requisições salvas com sucesso');
    } catch (error) {
      toast.error('Erro ao salvar requisições');
    } finally {
      setIsLoading(false);
    }
  };

  const filteredRequisitions = requisitions.filter(req => 
    req.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedRequisitions = [...filteredRequisitions].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.item.localeCompare(b.item);
    }
    return b.item.localeCompare(a.item);
  });

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && e.ctrlKey) {
        handleAddRequisition();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    const savedRequisitions = localStorage.getItem('requisitions');
    if (savedRequisitions) {
      setRequisitions(JSON.parse(savedRequisitions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('requisitions', JSON.stringify(requisitions));
  }, [requisitions]);

  return (
    <Container>
      <Header>
        <div className="title">
          <h3>Lista de Requisições</h3>
          <button>Ver Todas</button>
        </div>
        <div className="columns">
          <span>
            <MdInventory size={16} />
            Item
          </span>
          <span>
            <MdNumbers size={16} />
            Unidades
          </span>
          <span>
            <MdNotes size={16} />
            Observações (Opcional)
          </span>
          <button className="add" onClick={handleAddRequisition}>
            <MdAdd size={20} />
          </button>
        </div>
        <div className="new-item">
          <input
            type="text"
            placeholder="Digite o nome do item"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantidade"
            value={newUnits}
            onChange={e => setNewUnits(e.target.value)}
            min="1"
          />
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Buscar requisições..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </Header>
      <div className="list">
        {sortedRequisitions.map((item) => (
          <ListItem key={item.id}>
            <span className="item">{item.item}</span>
            <span className="units">{item.units}</span>
            <input
              type="text"
              placeholder="Adicionar descrição..."
              value={item.notes}
              onChange={e => handleUpdateNotes(item.id, e.target.value)}
            />
            <Actions>
              <button className="approve" onClick={() => handleApprove(item.id)}>
                <MdCheck size={16} />
              </button>
              <button className="reject" onClick={() => handleReject(item.id)}>
                <MdClose size={16} />
              </button>
            </Actions>
          </ListItem>
        ))}
      </div>
      <div className="footer">
        <button className="remove-all" onClick={handleRemoveAll}>
          Remover Todos
        </button>
        <button className="save" onClick={handleSave}>Salvar</button>
      </div>
    </Container>
  );
};

export default RequisitionList;
