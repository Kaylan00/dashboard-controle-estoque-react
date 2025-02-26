import styled from 'styled-components';

export const Container = styled.div`
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
`;

export const Icon = styled.span`
  font-size: 2rem;
`;

export const Name = styled.span`
  color: var(--text-primary);
  font-size: 0.875rem;
  font-weight: 500;
`; 