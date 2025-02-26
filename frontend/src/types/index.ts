export interface Product {
  id: string;
  name: string;
  icon: string;
  stock: number;
  price: number;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar?: string;
}

export interface Order {
  id: string;
  cliente: string;
  data: string;
  valor: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  items: {
    produto: string;
    quantidade: number;
  }[];
} 