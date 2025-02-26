import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  background: var(--panel-bg);
  border-radius: ${props => props.theme.borderRadius.panel};
  padding: 2rem;
  box-shadow: ${props => props.theme.shadows.card};
  overflow: hidden;
  min-height: calc(100vh - 2rem);

  h1 {
    color: var(--text-primary);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    
    @media (min-width: 1400px) {
      grid-template-columns: repeat(4, 1fr);
    }
    
    @media (min-width: 1800px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;

export const ProductCard = styled.div`
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.card};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  min-height: 220px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: var(--text-primary);
      font-size: 1.125rem;
    }

    .status {
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.875rem;

      &.in-stock {
        background: rgba(16, 185, 129, 0.1);
        color: #10b981;
      }

      &.low-stock {
        background: rgba(245, 158, 11, 0.1);
        color: #f59e0b;
      }

      &.out-stock {
        background: rgba(239, 68, 68, 0.1);
        color: #ef4444;
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .item {
      display: flex;
      justify-content: space-between;
      color: var(--text-secondary);
      font-size: 0.875rem;

      strong {
        color: var(--text-primary);
      }
    }
  }

  .actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;

    button {
      flex: 1;
      padding: 0.75rem;
      border-radius: ${props => props.theme.borderRadius.button};
      font-size: 0.875rem;
      transition: all 0.2s;

      &.edit {
        color: var(--text-secondary);
        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      }

      &.add {
        background: var(--primary);
        color: white;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
`; 