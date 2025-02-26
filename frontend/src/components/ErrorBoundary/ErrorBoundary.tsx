'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Container, ErrorMessage } from './styles';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Container>
          <ErrorMessage>
            <h2>Oops, algo deu errado!</h2>
            <p>{this.state.error?.message}</p>
            <button onClick={() => window.location.reload()}>
              Tentar novamente
            </button>
          </ErrorMessage>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 