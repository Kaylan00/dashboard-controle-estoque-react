'use client';

import React from 'react';
import { Container, Sidebar, Logo, NavItem, MobileHeader } from './styles';
import { MdDashboard, MdInventory, MdPeople, MdShoppingCart, MdAssignment, MdPerson } from 'react-icons/md';
import { useNavigation } from '@/hooks/useNavigation';
import { useRouter } from 'next/navigation';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { activeItem, handleNavigate } = useNavigation();
  const router = useRouter();

  const navItems = [
    { id: 'dashboard' as const, label: 'Dashboard', icon: MdDashboard, path: '/' },
    { id: 'stock' as const, label: 'Estoque', icon: MdInventory, path: '/stock' },
    { id: 'employees' as const, label: 'Funcionários', icon: MdPeople, path: '/employees' },
    { id: 'orders' as const, label: 'Pedidos', icon: MdShoppingCart, path: '/orders' },
    { id: 'requisitions' as const, label: 'Requisições', icon: MdAssignment, path: '/requisitions' },
  ] as const;

  return (
    <Container>
      <Sidebar>
        <MobileHeader>
          <Logo>
            <MdInventory size={24} />
            <span>Controle de Estoque</span>
          </Logo>
          <button className="profile-button" onClick={() => router.push('/profile')}>
            <MdPerson size={24} />
          </button>
        </MobileHeader>

        <nav>
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              active={activeItem === (item.id === 'dashboard' ? '' : item.id)}
              onClick={() => handleNavigate(item.id)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavItem>
          ))}
        </nav>
      </Sidebar>

      {children}
    </Container>
  );
};

export default Layout; 