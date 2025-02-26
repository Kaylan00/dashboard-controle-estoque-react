import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export type NavItem = 'dashboard' | 'stock' | 'employees' | 'orders' | 'requisitions';

const routeLabels = {
  dashboard: 'Dashboard',
  stock: 'Estoque',
  employees: 'Funcionários',
  orders: 'Pedidos',
  requisitions: 'Requisições'
};

export function useNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  // Remove a / inicial e usa o pathname como activeItem
  const activeItem = (pathname?.slice(1) || 'dashboard') as NavItem;

  const handleNavigate = (item: NavItem) => {
    const path = item === 'dashboard' ? '/' : `/${item}`;
    
    // Feedback visual da navegação
    toast.info(`Navegando para ${routeLabels[item]}...`, {
      autoClose: 1000,
      position: 'bottom-right'
    });
    
    router.push(path);
  };

  // Atualiza o título da página
  useEffect(() => {
    document.title = `${routeLabels[activeItem]} | Controle de Estoque`;
  }, [activeItem]);

  return {
    activeItem,
    handleNavigate
  };
} 