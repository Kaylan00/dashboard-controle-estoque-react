'use client';

import React from 'react';
import { Container, Header, ActivityItem } from './styles';

const activities = [
  {
    time: '16:23',
    description: 'Nova notificação com botão de fechar e texto de aviso'
  },
  {
    time: '14:45',
    description: 'Atividade com botão de fechar'
  },
  {
    time: '13:30',
    description: 'Atualização regular com "aviso de salvamento"'
  },
  {
    time: '11:15',
    description: 'Nova atualização B2B liberada'
  },
  {
    time: '09:22',
    description: 'Confirmação sobre últimas atualizações'
  }
];

const RecentActivities: React.FC = () => {
  return (
    <Container>
      <Header>
        <h3>Atividades Recentes</h3>
        <button>Ver Todas</button>
      </Header>
      <div className="activities">
        {activities.map((activity, index) => (
          <ActivityItem key={index}>
            <time>{activity.time}</time>
            <p>{activity.description}</p>
          </ActivityItem>
        ))}
      </div>
    </Container>
  );
};

export default RecentActivities; 