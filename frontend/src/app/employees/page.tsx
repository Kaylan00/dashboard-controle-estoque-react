'use client';

import React from 'react';
import { Layout } from '@/components';
import { Container, EmployeeGrid, EmployeeCard } from './styles';
import { MdEmail, MdPhone, MdEdit, MdMessage } from 'react-icons/md';

export default function Employees() {
  return (
    <Layout>
      <Container>
        <h1>Funcionários</h1>
        <EmployeeGrid>
            <EmployeeCard >
              <div className="avatar">
                <img />
              </div>
              <div className="info">
                <div className="header">
                  <h3></h3>
                  <span></span>
                </div>
                <div className="details">
                  <div className="item">
                    <MdEmail size={16} />
                    <span></span>
                  </div>
                  <div className="item">
                    <MdPhone size={16} />
                    <span></span>
                  </div>
                </div>
                <div className="actions">
                  <button className="edit">
                    <MdEdit size={16} />
                    Editar
                  </button>
                  <button className="message">
                    <MdMessage size={16} />
                    Mensagem
                  </button>
                </div>
              </div>
            </EmployeeCard>
          ))
        </EmployeeGrid>
      </Container>
    </Layout>
  );
} 