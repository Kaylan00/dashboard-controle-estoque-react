'use client';

import React from 'react';
import { Layout } from '@/components';
import { Container, ProfileCard } from './styles';
import { MdEdit, MdEmail, MdPerson, MdExitToApp } from 'react-icons/md';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();

  const handleLogout = () => {
    // Implementar logout
    router.push('/login');
  };

  return (
    <Layout>
      <Container>
        <ProfileCard>
          <div className="header">
            <div className="avatar">
              <img src="https://github.com/github.png" alt="Avatar" />
              <button className="edit">
                <MdEdit size={16} />
              </button>
            </div>
            <h2>Nome do Usuário</h2>
            <span className="role">Administrador</span>
          </div>

          <div className="info">
            <div className="field">
              <MdPerson size={20} />
              <span>Nome Completo</span>
              <p>João da Silva</p>
            </div>
            <div className="field">
              <MdEmail size={20} />
              <span>Email</span>
              <p>joao@email.com</p>
            </div>
          </div>

          <button className="logout" onClick={handleLogout}>
            <MdExitToApp size={20} />
            Sair da conta
          </button>
        </ProfileCard>
      </Container>
    </Layout>
  );
} 