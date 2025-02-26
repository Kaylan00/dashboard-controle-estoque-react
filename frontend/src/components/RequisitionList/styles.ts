import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.card};
  height: 100%;
  display: flex;
  flex-direction: column;

  .list {
    flex: 1;
    overflow-y: auto;
    margin: 1rem 0;
    padding-right: 0.5rem;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 2px;
    }
  }

  .footer {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 0.75rem 1.5rem;
      border-radius: ${props => props.theme.borderRadius.button};
      font-size: 0.875rem;
      transition: all 0.2s;

      &.remove-all {
        color: var(--text-secondary);
        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      }

      &.save {
        background: var(--primary);
        color: white;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 1rem;

    .footer {
      flex-direction: column;
      gap: 1rem;

      button {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    .list {
      margin: 0.5rem 0;
    }
  }
`;

export const Header = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    h3 {
      color: var(--text-secondary);
      font-size: 0.875rem;
    }

    button {
      color: var(--primary);
      font-size: 0.875rem;
    }
  }

  .columns {
    display: grid;
    grid-template-columns: 1fr 120px 1fr 40px;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;

    span {
      color: var(--text-secondary);
      font-size: 0.875rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: var(--primary);
      }
    }

    .add {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;

      &:hover {
        transform: rotate(90deg);
        opacity: 0.9;
      }
    }
  }

  .new-item {
    display: grid;
    grid-template-columns: 1fr 120px;
    gap: 1rem;
    margin-bottom: 1rem;

    input {
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
  }

  .search {
    margin-top: 1rem;
    width: 100%;

    input {
      width: 100%;
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
  }

  @media (max-width: 1024px) {
    .columns {
      grid-template-columns: 1fr 100px 40px;
      
      span:nth-child(3) {
        display: none;
      }
    }

    .new-item {
      grid-template-columns: 1fr 100px;
    }
  }

  @media (max-width: 768px) {
    .title {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .columns {
      grid-template-columns: 1fr 80px 40px;
      gap: 0.5rem;
    }

    .new-item {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }

    .search input {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .columns {
      grid-template-columns: 1fr 40px;
      
      span:nth-child(2) {
        display: none;
      }
    }
  }
`;

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  background: var(--panel-bg);
  border-radius: ${props => props.theme.borderRadius.card};
  margin-bottom: 0.5rem;
  animation: ${fadeIn} 0.3s ease;

  .item, .units {
    color: var(--text-primary);
    font-size: 0.875rem;
  }

  input {
    padding: 0.875rem 1rem;
    background: var(--card-bg);
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

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 100px auto auto;
    
    input {
      display: none;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr auto;
    gap: 0.5rem;
    
    .units {
      display: none;
    }

    .info {
      flex: 1;
    }
  }

  @media (max-width: 480px) {
    padding: 0.75rem;

    .item {
      font-size: 0.813rem;
    }

    .actions {
      button {
        width: 28px;
        height: 28px;
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    width: 32px;
    height: 32px;
    border-radius: ${props => props.theme.borderRadius.button};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &.approve {
      background: rgba(16, 185, 129, 0.1);
      color: #10b981;
      &:hover {
        background: rgba(16, 185, 129, 0.2);
        transform: scale(1.05);
      }
    }

    &.reject {
      background: rgba(239, 68, 68, 0.1);
      color: #ef4444;
      &:hover {
        background: rgba(239, 68, 68, 0.2);
        transform: scale(1.05);
      }
    }
  }
`; 