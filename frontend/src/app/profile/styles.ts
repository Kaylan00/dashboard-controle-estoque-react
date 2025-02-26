import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const ProfileCard = styled.div`
  background: var(--card-bg);
  border-radius: ${props => props.theme.borderRadius.card};
  padding: 2rem;
  width: 100%;
  max-width: 500px;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

    .avatar {
      position: relative;
      margin-bottom: 1rem;

      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 3px solid var(--primary);
      }

      .edit {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: var(--primary);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    h2 {
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .role {
      color: var(--text-secondary);
      font-size: 0.875rem;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;

    .field {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background: var(--panel-bg);
      border-radius: ${props => props.theme.borderRadius.card};

      svg {
        color: var(--primary);
      }

      span {
        color: var(--text-secondary);
        font-size: 0.875rem;
      }

      p {
        margin-left: auto;
        color: var(--text-primary);
      }
    }
  }

  .logout {
    width: 100%;
    padding: 1rem;
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    border-radius: ${props => props.theme.borderRadius.button};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.2s;

    &:hover {
      background: rgba(239, 68, 68, 0.2);
    }
  }
`; 