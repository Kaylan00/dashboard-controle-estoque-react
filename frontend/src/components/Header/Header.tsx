'use client';

import React, { useState } from 'react';
import { MdSearch, MdLightMode, MdDarkMode } from 'react-icons/md';
import { Container, SearchBar, UserProfile, ThemeButton } from './styles';
import { useTheme } from '@/contexts/ThemeContext';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscando por:', searchTerm);
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSearch}>
        <MdSearch size={18} />
        <input 
          type="text" 
          placeholder="Buscar por qualquer coisa..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchBar>
      
      <div className="right">
        <ThemeButton onClick={toggleTheme} aria-label={isDarkMode ? 'Mudar para tema claro' : 'Mudar para tema escuro'}>
          {isDarkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
        </ThemeButton>

        <UserProfile>
          <img src="https://github.com/github.png" alt="Perfil do usuário" />
        </UserProfile>
      </div>
    </Container>
  );
};

export default Header; 