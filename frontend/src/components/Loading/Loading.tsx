'use client';

import React from 'react';
import { Container, Spinner } from './styles';

interface LoadingProps {
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ fullScreen }) => {
  return (
    <Container fullScreen={fullScreen}>
      <Spinner />
    </Container>
  );
};

export default Loading; 