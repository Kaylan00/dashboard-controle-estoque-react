'use client';

import React from 'react';
import { Layout, Loading } from '@/components';
import { Container, ProductCard } from './styles';
import { useProducts } from '@/hooks/useProducts';

export default function Stock() {
  const { isLoading } = useProducts();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <Container>
        <h1>Estoque</h1>
        <div className="grid">
      
            <ProductCard>
              <div className="header">
                <h3></h3>
                <span className={`status `}>
  
                </span>
              </div>
              <div className="info">
                <div className="item">
                  <span>SKU:</span>
                  <strong></strong>
                </div>
                <div className="item">
                  <span>Quantidade:</span>
                  <strong></strong>
                </div>
                <div className="item">
                  <span>Estoque Mínimo:</span>
                  <strong></strong>
                </div>
                <div className="item">
                  <span>Preço:</span>
                  <strong>R$</strong>
                </div>
              </div>
              <div className="actions">
                <button className="edit">Editar</button>
                <button className="add">Adicionar</button>
              </div>
            </ProductCard>
          ))
        </div>
      </Container>
    </Layout>
  );
} 