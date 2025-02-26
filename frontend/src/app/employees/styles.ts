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
`;

export const EmployeeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const EmployeeCard = styled.div`
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.card};
  display: flex;
  gap: 1.5rem;

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--primary);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .header {
      h3 {
        color: var(--text-primary);
        font-size: 1.125rem;
      }

      span {
        color: var(--text-secondary);
        font-size: 0.875rem;
      }
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      margin-top: 0.5rem;

      .item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--text-secondary);
        font-size: 0.875rem;

        svg {
          color: var(--primary);
        }
      }
    }

    .actions {
      display: flex;
      gap: 0.5rem;
      margin-top: auto;

      button {
        padding: 0.5rem;
        border-radius: ${props => props.theme.borderRadius.button};
        font-size: 0.875rem;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &.edit {
          color: var(--text-secondary);
          &:hover {
            background: rgba(255, 255, 255, 0.1);
          }
        }

        &.message {
          background: var(--primary);
          color: white;
          &:hover {
            opacity: 0.9;
          }
        }
      }
    }
  }
`; 