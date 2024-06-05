import React from 'react';

const Sidebar = ({ activeTab, onTabChange }) => {
  return (
    <div className="sidebar">
      <a
        className={activeTab === 'home' ? 'active' : ''}
        href="#home"
        onClick={() => onTabChange('home')}
      >
        Home
      </a>
      <a
        className={activeTab === 'about' ? 'active' : ''}
        href="#about"
        onClick={() => onTabChange('about')}
      >
        Sobre
      </a>
      <a
        className={activeTab === 'services' ? 'active' : ''}
        href="#services"
        onClick={() => onTabChange('services')}
      >
        Serviços
      </a>
      <a
        className={activeTab === 'contact' ? 'active' : ''}
        href="#contact"
        onClick={() => onTabChange('contact')}
      >
        Contato
      </a>
    </div>
  );
};

export default Sidebar;
