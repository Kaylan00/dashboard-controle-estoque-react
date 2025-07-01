import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  background: var(--card-bg);
  padding: 2rem;
  border-radius: ${(props) => props.theme.borderRadius.card};
  box-shadow: ${(props) => props.theme.shadows.card};

  h2 {
    font-size: 1.5rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    background: var(--primary);
    color: white;
    border-radius: ${(props) => props.theme.borderRadius.button};
    font-size: 1rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
`;