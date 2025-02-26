import styled from 'styled-components';

export const Container = styled.div`
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.card};
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 64px;
    height: calc(100% - 64px);
    width: 100px;
    background: linear-gradient(to right, transparent, var(--card-bg));
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &.has-more::after {
    opacity: 1;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;

  h3 {
    color: var(--text-secondary);
    font-size: 0.875rem;
  }

  button {
    color: var(--primary);
    font-size: 0.875rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Products = styled.div`
  overflow-x: auto;
  margin: 0 -1.5rem;
  padding: 0.5rem 1.5rem;
  min-height: 160px;
  scroll-behavior: smooth;
  cursor: grab;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  .products-wrapper {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 160px;
    gap: 1rem;
    padding-right: 100px;
    height: 100%;
  }
`;

export const ProductCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #1C1827;
  padding: 1.5rem 1rem;
  border-radius: ${props => props.theme.borderRadius.card};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.2s;
  cursor: pointer;
  user-select: none;
  height: 100%;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  .icon {
    font-size: 2rem;
  }

  .name {
    color: var(--text-primary);
    font-size: 0.875rem;
    font-weight: 500;
  }
`; 