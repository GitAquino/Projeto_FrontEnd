import React from 'react';

const Content = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'Pagina Principal':
        return <div>Conteúdo da página inicial.</div>;
      case 'Meu Perfil':
        return <div>Conteúdo do Meu Perfil.</div>;
      case 'Minhas Candidaturas':
        return <div>Conteúdo das Minhas Candidaturas.</div>;
      case 'Mensagens':
        return <div>Minhas Mensagens.</div>;
      default:
        return null;
    }
  };

  return <div className="content">{renderContent()}</div>;
};

export default Content;
