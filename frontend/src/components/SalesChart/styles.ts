import styled from 'styled-components';

export const Container = styled.div`
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.card};

  .chart-container {
    height: 300px;
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
`;

export const TimeFilter = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.25rem;
  border-radius: ${props => props.theme.borderRadius.button};
  gap: 0.25rem;

  button {
    padding: 0.5rem 1rem;
    border-radius: ${props => props.theme.borderRadius.button};
    color: var(--text-secondary);
    font-size: 0.875rem;
    transition: all 0.2s;

    &.active {
      background: var(--primary);
      color: white;
    }

    &:hover:not(.active) {
      background: rgba(255, 255, 255, 0.1);
      color: var(--text-primary);
    }
  }
`; 