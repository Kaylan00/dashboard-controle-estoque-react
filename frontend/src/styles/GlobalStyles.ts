import { createGlobalStyle, DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bgPrimary: string;
      cardBg: string;
      panelBg: string;
      textPrimary: string;
      textSecondary: string;
      success: string;
      primary: string;
      border: string;
      sidebarBg: string;
      sidebarHover: string;
      [key: string]: string;
    };
    borderRadius: {
      card: string;
      [key: string]: string;
    };
  }
}

export default createGlobalStyle`
  :root {
    --bg-primary: ${props => props.theme.colors.bgPrimary};
    --card-bg: ${props => props.theme.colors.cardBg};
    --panel-bg: ${props => props.theme.colors.panelBg};
    --text-primary: ${props => props.theme.colors.textPrimary};
    --text-secondary: ${props => props.theme.colors.textSecondary};
    --success: ${props => props.theme.colors.success};
    --primary: ${props => props.theme.colors.primary};
    --border: ${props => props.theme.colors.border};
    --sidebar-bg: ${props => props.theme.colors.sidebarBg};
    --sidebar-hover: ${props => props.theme.colors.sidebarHover};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.2s ease,
                color 0.2s ease,
                border-color 0.2s ease,
                box-shadow 0.2s ease,
                transform 0.2s ease,
                opacity 0.2s ease;
  }

  body {
    background: var(--bg-primary);
    color: var(--text-primary);
    font-family: 'Inter', sans-serif;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  .Toastify__toast {
    background: var(--card-bg);
    color: var(--text-primary);
    border-radius: ${props => props.theme.borderRadius.card};
  }

  .Toastify__toast-icon {
    color: var(--primary);
  }

  .Toastify__close-button {
    color: var(--text-secondary);
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }

  .Toastify__progress-bar {
    background: var(--primary);
  }

  .Toastify__toast--success {
    .Toastify__toast-icon {
      color: #10b981;
    }
    .Toastify__progress-bar {
      background: #10b981;
    }
  }

  .Toastify__toast--error {
    .Toastify__toast-icon {
      color: #ef4444;
    }
    .Toastify__progress-bar {
      background: #ef4444;
    }
  }

  // Animação de fade para as páginas
  main {
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  // Melhorar o scroll
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--panel-bg);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
    
    &:hover {
      background: var(--primary-dark);
    }
  }
`; 