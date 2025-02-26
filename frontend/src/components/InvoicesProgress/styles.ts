import styled from 'styled-components';

export const Container = styled.div`
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.card};
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h3 {
    color: var(--text-secondary);
    font-size: 0.875rem;
  }

  button {
    color: var(--text-secondary);
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    border-radius: ${props => props.theme.borderRadius.button};
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;

export const InvoiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;

  .progress {
    width: 120px;
    height: 120px;
    margin-bottom: 1rem;
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;

    .number {
      font-size: 1.25rem;
      color: var(--text-primary);
      font-weight: 500;
    }

    .amount {
      font-size: 2rem;
      color: var(--primary);
      font-weight: 600;
    }

    .date {
      font-size: 0.875rem;
      color: var(--text-secondary);
    }
  }
`; 