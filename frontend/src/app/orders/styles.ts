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

export const OrdersTable = styled.div`
  background: var(--card-bg);
  border-radius: ${props => props.theme.borderRadius.card};
  overflow: hidden;

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      padding: 1rem;
      text-align: left;
    }

    th {
      background: var(--card-bg);
      color: var(--text-secondary);
      font-weight: 500;
      font-size: 0.875rem;
      border-bottom: 1px solid var(--border);
    }

    td {
      color: var(--text-primary);
      font-size: 0.875rem;
      border-bottom: 1px solid var(--border);

      &.status {
        span {
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;

          &.pending {
            background: rgba(245, 158, 11, 0.1);
            color: #f59e0b;
          }

          &.processing {
            background: rgba(59, 130, 246, 0.1);
            color: #3b82f6;
          }

          &.completed {
            background: rgba(16, 185, 129, 0.1);
            color: #10b981;
          }

          &.cancelled {
            background: rgba(239, 68, 68, 0.1);
            color: #ef4444;
          }
        }
      }

      .actions {
        display: flex;
        gap: 0.5rem;

        button {
          padding: 0.5rem;
          border-radius: ${props => props.theme.borderRadius.button};
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;

          &.view {
            color: var(--text-secondary);
            &:hover {
              background: rgba(255, 255, 255, 0.1);
            }
          }

          &.edit {
            color: var(--primary);
            &:hover {
              background: rgba(109, 40, 217, 0.1);
            }
          }

          &.delete {
            color: #ef4444;
            &:hover {
              background: rgba(239, 68, 68, 0.1);
            }
          }
        }
      }
    }
  }
`; 