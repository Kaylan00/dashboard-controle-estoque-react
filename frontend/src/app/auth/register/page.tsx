'use client';

import React, { useState } from 'react';
import { Container, Form } from '../login/styles';
import { MdPerson, MdEmail, MdLock } from 'react-icons/md';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Será implementado com o backend
    console.log({ name, email, password, confirmPassword });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Criar Conta</h1>
        
        <div className="field">
          <label>
            <MdPerson size={20} />
            Nome
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
            required
          />
        </div>

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

        <div className="field">
          <label>
            <MdLock size={20} />
            Confirmar Senha
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirme sua senha"
            required
          />
        </div>

        <button type="submit">Cadastrar</button>

        <div className="links">
          <a href="/auth/login">Já tenho uma conta</a>
        </div>
      </Form>
    </Container>
  );
} 