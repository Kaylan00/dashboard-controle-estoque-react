'use client';

import { useRef, useState, useEffect } from 'react';
import { ProductCard } from '../ProductCard';
import { Container, Header, Products } from './styles';

const products = [
  { id: '1', name: 'Garrafas', icon: '🍾', stock: 50, price: 29.90, category: 'Vidros', createdAt: '2024-01-01', updatedAt: '2024-01-01' },
  { id: '2', name: 'Copos', icon: '🥃', stock: 100, price: 19.90, category: 'Vidros', createdAt: '2024-01-01', updatedAt: '2024-01-01' },
  { id: '3', name: 'Tigelas', icon: '🥣', stock: 30, price: 24.90, category: 'Utensílios', createdAt: '2024-01-01', updatedAt: '2024-01-01' },
  { id: '4', name: 'Pratos', icon: '🍽️', stock: 80, price: 34.90, category: 'Utensílios', createdAt: '2024-01-01', updatedAt: '2024-01-01' },
  { id: '5', name: 'Talheres', icon: '🍴', stock: 150, price: 14.90, category: 'Utensílios', createdAt: '2024-01-01', updatedAt: '2024-01-01' },
  { id: '6', name: 'Panelas', icon: '🥘', stock: 25, price: 89.90, category: 'Cozinha', createdAt: '2024-01-01', updatedAt: '2024-01-01' },
  { id: '7', name: 'Xícaras', icon: '☕', stock: 60, price: 9.90, category: 'Vidros', createdAt: '2024-01-01', updatedAt: '2024-01-01' },
  { id: '8', name: 'Jarras', icon: '🫖', stock: 40, price: 39.90, category: 'Vidros', createdAt: '2024-01-01', updatedAt: '2024-01-01' },
  { id: '9', name: 'Potes', icon: '🥫', stock: 45, price: 19.90, category: 'Utensílios', createdAt: '2024-01-01', updatedAt: '2024-01-01' }
];

export function ProductsList() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
        setHasMore(scrollWidth > clientWidth && scrollWidth - clientWidth - scrollLeft > 10);
      }
    };

    checkScroll();
    const scrollElement = scrollRef.current;
    
    scrollElement?.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      scrollElement?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <Container className={hasMore ? 'has-more' : ''}>
      <Header>
        <h3>Produtos</h3>
        <button>Ver Todos</button>
      </Header>
      <Products
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div className="products-wrapper">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))}
        </div>
      </Products>
    </Container>
  );
} 