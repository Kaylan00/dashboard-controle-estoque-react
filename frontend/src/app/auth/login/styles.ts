import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: var(--bg-primary);
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: var(--card-bg);
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.card};
  box-shadow: ${props => props.theme.shadows.card};

  h1 {
    color: var(--text-primary);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .field {
    margin-bottom: 1rem;

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-secondary);
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
    }

    input {
      width: 100%;
      padding: 0.875rem 1rem;
      background: var(--panel-bg);
      border: 1px solid var(--border);
      border-radius: ${props => props.theme.borderRadius.input};
      color: var(--text-primary);
      font-size: 0.875rem;
      transition: all 0.2s;

      &:focus {
        border-color: var(--primary);
        outline: none;
        box-shadow: 0 0 0 2px rgba(109, 40, 217, 0.1);
      }
    }
  }

  button {
    width: 100%;
    padding: 0.875rem;
    background: var(--primary);
    color: white;
    border-radius: ${props => props.theme.borderRadius.button};
    font-size: 1rem;
    font-weight: 500;
    margin: 1.5rem 0;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }

  .links {
    display: flex;
    justify-content: space-between;
    
    a {
      color: var(--primary);
      font-size: 0.875rem;
      text-decoration: none;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`; 