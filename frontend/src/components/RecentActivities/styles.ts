import styled from 'styled-components';

export const Container = styled.div`
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.card};

  .activities {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    max-height: 350px;
    overflow-y: auto;
    padding-right: 0.5rem;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 2px;
    }
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

  button {
    color: var(--primary);
    font-size: 0.875rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ActivityItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border);

  time {
    color: var(--text-secondary);
    font-size: 0.875rem;
    min-width: 60px;
  }

  p {
    color: var(--text-primary);
    font-size: 0.875rem;
    line-height: 1.4;
  }
`; 