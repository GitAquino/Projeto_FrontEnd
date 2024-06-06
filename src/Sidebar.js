import React from 'react';
import { FiHome } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";



const Sidebar = ({ activeTab, onTabChange }) => {
  return (
    <div className="sidebar">
      <div className='perfil'>
        <div className='perfil-foto'>
        </div>
          <div id='perfil-nome'>
            <span>Nome</span>
            <span>Sobrenome</span>
          </div>
      </div>
      <div className='opcoes'>
      <a
        className={activeTab === 'Pagina Principal' ? 'active' : ''}
        href="#Pagina Principal"
        onClick={() => onTabChange('Pagina Principal')}
      >
        <FiHome className='icon' />
        Pagina Principal
      </a>
      <a
        className={activeTab === 'Meu Perfil' ? 'active' : ''}
        href="#Meu Perfil"
        onClick={() => onTabChange('Meu Perfil')}
      >
        <FaRegUser className='icon'/>
        Meu Perfil
      </a>
      <a
        className={activeTab === 'Minhas Candidaturas' ? 'active' : ''}
        href="#Minhas Candidaturas"
        onClick={() => onTabChange('Minhas Candidaturas')}
      >
        <FaRegListAlt className='icon'/>
        Minhas Candidaturas
      </a>
      <a
        className={activeTab === 'Mensagens' ? 'active' : ''}
        href="#Mensagens"
        onClick={() => onTabChange('Mensagens')}
      >
        <BiMessageDetail className='icon' />
        Mensagens
      </a>
      </div>
    </div>
  );
};

export default Sidebar;
