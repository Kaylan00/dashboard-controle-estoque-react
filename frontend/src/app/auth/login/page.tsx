'use client';

import React, { useState } from 'react';
import { Container, Form } from './styles';
import { MdEmail, MdLock } from 'react-icons/md';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Será implementado com o backend
    console.log({ email, password });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        
        <div className="field">
          <label>
            <MdEmail size={20} />
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            required
          />
        </div>

        <div className="field">
          <label>
            <MdLock size={20} />
            Senha
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            required
          />
        </div>

        <button type="submit">Entrar</button>

        <div className="links">
          <a href="/auth/register">Criar conta</a>
          <a href="/auth/forgot-password">Esqueci minha senha</a>
        </div>
      </Form>
    </Container>
  );
} 