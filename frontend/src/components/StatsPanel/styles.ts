import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const StatCard = styled.div`
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.card};
  box-shadow: ${props => props.theme.shadows.card};
  
  h3 {
    color: var(--text-secondary);
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--text-primary);

    &.profit {
      color: var(--success);
    }
  }
`; 