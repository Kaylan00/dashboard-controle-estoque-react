'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Container, Header, Products, ProductCard } from './styles';

const products = [
  { name: 'Garrafas', icon: '🍾' },
  { name: 'Copos', icon: '🥃' },
  { name: 'Tigelas', icon: '🥣' },
  { name: 'Pratos', icon: '🍽️' },
  { name: 'Talheres', icon: '🍴' },
  { name: 'Panelas', icon: '🥘' },
  { name: 'Xícaras', icon: '☕' },
  { name: 'Jarras', icon: '🫖' },
  { name: 'Potes', icon: '🥫' }
];

const ProductsList: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
        setHasMore(scrollWidth > clientWidth && scrollWidth - clientWidth - scrollLeft > 10);
      }
    };

    checkScroll();
    scrollRef.current?.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      scrollRef.current?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

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
          {products.map((product, index) => (
            <ProductCard key={index}>
              <span className="icon">{product.icon}</span>
              <span className="name">{product.name}</span>
            </ProductCard>
          ))}
        </div>
      </Products>
    </Container>
  );
};

export default ProductsList; 