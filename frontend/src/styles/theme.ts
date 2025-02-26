const baseTheme = {
  borderRadius: {
    panel: '20px',
    card: '12px',
    button: '8px'
  },
  shadows: {
    card: '0 4px 20px rgba(0, 0, 0, 0.15)',
    hover: '0 8px 30px rgba(0, 0, 0, 0.25)'
  }
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    bgPrimary: '#f0f7f5',
    cardBg: '#ffffff',
    panelBg: '#ffffff',
    textPrimary: '#2c3e50',
    textSecondary: '#94a3b8',
    success: '#10b981',
    primary: '#7fb9b1',
    border: 'rgba(0, 0, 0, 0.1)',
    chartLine: '#7fb9b1',
    sidebarBg: '#ffffff',
    sidebarActive: '#7fb9b1',
    sidebarHover: '#e6f3f1'
  }
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    bgPrimary: '#13111c',
    cardBg: '#1c1827',
    panelBg: '#1c1827',
    textPrimary: '#ffffff',
    textSecondary: '#9d97b5',
    success: '#10b981',
    primary: '#6d28d9',
    border: 'rgba(255, 255, 255, 0.1)',
    chartLine: '#6d28d9',
    sidebarBg: '#1c1827',
    sidebarActive: '#6d28d9',
    sidebarHover: '#2d2640'
  }
}; 