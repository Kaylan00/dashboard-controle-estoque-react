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

  .content {
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 2rem;
  }
`;

export const NewRequisitionForm = styled.form`
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.card};
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 400px;

  h2 {
    color: var(--text-primary);
    font-size: 1.25rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border);
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      color: var(--text-secondary);
      font-size: 0.875rem;
      font-weight: 500;
    }

    input, textarea {
      padding: 0.875rem 1rem;
      background: var(--panel-bg);
      border: 1px solid var(--border);
      border-radius: ${props => props.theme.borderRadius.input};
      color: var(--text-primary);
      font-size: 0.875rem;
      transition: all 0.2s;

      &::placeholder {
        color: var(--text-secondary);
        opacity: 0.7;
      }

      &:hover {
        border-color: var(--text-secondary);
      }

      &:focus {
        border-color: var(--primary);
        outline: none;
        box-shadow: 0 0 0 2px rgba(109, 40, 217, 0.1);
      }
    }

    textarea {
      resize: vertical;
      min-height: 120px;
      line-height: 1.5;
    }

    &.error {
      input, textarea {
        border-color: #ef4444;
      }

      .error-message {
        color: #ef4444;
        font-size: 0.75rem;
        margin-top: 0.25rem;
      }
    }
  }

  button[type="submit"] {
    margin-top: 0.5rem;
    padding: 0.875rem;
    background: var(--primary);
    color: white;
    border-radius: ${props => props.theme.borderRadius.button};
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }
  }
`;

export const RequisitionsList = styled.div`
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.card};

  h2 {
    color: var(--text-primary);
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const RequisitionItem = styled.div`
  padding: 1rem;
  background: var(--panel-bg);
  border-radius: ${props => props.theme.borderRadius.card};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h3 {
      color: var(--text-primary);
      font-size: 1rem;
    }

    .details {
      display: flex;
      gap: 1rem;
      color: var(--text-secondary);
      font-size: 0.875rem;

      span {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }
    }
  }

  .actions {
    display: flex;
    gap: 0.5rem;

    button {
      padding: 0.5rem;
      border-radius: ${props => props.theme.borderRadius.button};
      font-size: 0.875rem;
      transition: all 0.2s;

      &.approve {
        background: rgba(16, 185, 129, 0.1);
        color: #10b981;
        &:hover {
          background: rgba(16, 185, 129, 0.2);
        }
      }

      &.reject {
        background: rgba(239, 68, 68, 0.1);
        color: #ef4444;
        &:hover {
          background: rgba(239, 68, 68, 0.2);
        }
      }
    }
  }
`; 