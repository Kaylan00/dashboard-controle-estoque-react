import styled from 'styled-components';

export const Container = styled.div`
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.card};

  .sales-list {
    margin-top: 1rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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

export const SaleItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border);

  span {
    color: var(--text-primary);
    font-size: 0.875rem;

    &:last-child {
      color: var(--success);
    }
  }
`; 