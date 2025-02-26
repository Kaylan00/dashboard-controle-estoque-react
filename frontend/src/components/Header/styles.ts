import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  gap: 1rem;

  .right {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const SearchBar = styled.form`
  position: relative;
  flex: 1;

  input {
    width: 100%;
    padding: 0.625rem 1rem 0.625rem 2.5rem;
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

    &:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 2px rgba(109, 40, 217, 0.1);
    }
  }

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-secondary);
    pointer-events: none;
  }
`;

export const UserProfile = styled.div`
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const ThemeButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: all 0.2s;

  &:hover {
    color: var(--primary);
    transform: rotate(15deg);
  }
`;

export const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
  border-radius: ${props => props.theme.borderRadius.button};
  transition: all 0.2s;

  &:hover {
    background: var(--sidebar-hover);
    color: var(--text-primary);
  }

  svg {
    color: var(--primary);
  }
`; 