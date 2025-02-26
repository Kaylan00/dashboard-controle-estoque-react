import { memo } from 'react';
import type { Product } from '@/types';
import { Container, Icon, Name } from './styles';

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

function ProductCardComponent({ product, onClick }: ProductCardProps) {
  const handleClick = () => {
    onClick?.(product);
  };

  return (
    <Container onClick={handleClick}>
      <Icon>{product.icon}</Icon>
      <Name>{product.name}</Name>
    </Container>
  );
}

export const ProductCard = memo(ProductCardComponent); 