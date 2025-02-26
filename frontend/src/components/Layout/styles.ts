import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  width: 280px;
  min-width: 280px;
  background: var(--card-bg);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 1024px) {
    width: 240px;
    min-width: 240px;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    min-width: 100%;
    height: auto;
    padding: 1rem;
    gap: 1rem;
    
    nav {
      display: flex;
      overflow-x: auto;
      padding-bottom: 0.5rem;

      &::-webkit-scrollbar {
        height: 4px;
      }

      &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
      }

      &::-webkit-scrollbar-thumb {
        background: var(--primary);
        border-radius: 2px;
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    span {
      display: none;
    }
  }
`;

export const NavItem = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.875rem 1rem;
  color: ${props => props.active ? props.theme.colors.primary : 'var(--text-secondary)'};
  font-size: 0.875rem;
  border-radius: ${props => props.theme.borderRadius.button};
  background: ${props => props.active 
    ? 'rgba(255, 255, 255, 0.05)'
    : 'transparent'
  };
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: ${props => props.active ? 'transparent' : 'var(--sidebar-hover)'};
    transition: width 0.2s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(4px);

    &:before {
      width: 100%;
    }

    svg {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: translateX(2px);
  }

  svg {
    color: ${props => props.active ? props.theme.colors.primary : 'var(--text-secondary)'};
    font-size: 1.25rem;
    transition: transform 0.2s ease;
    position: relative;
    z-index: 1;
  }

  span {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: auto;
    white-space: nowrap;
    padding: 0.75rem 1rem;

    &:hover {
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(-1px);
    }
  }
`;

export const UserSection = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  background: var(--panel-bg);
  border-radius: ${props => props.theme.borderRadius.panel};
  padding: 2rem;
  box-shadow: ${props => props.theme.shadows.card};
  overflow: hidden;
  min-height: calc(100vh - 2rem);
`;

export const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  .profile-button {
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: var(--text-secondary);
    transition: all 0.2s;

    &:hover {
      background: var(--sidebar-hover);
      color: var(--primary);
    }
  }

  @media (max-width: 768px) {
    .profile-button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`; 