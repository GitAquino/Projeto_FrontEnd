import React from 'react';

const Content = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <div>Conteúdo da página inicial.</div>;
      case 'about':
        return <div>Conteúdo sobre nós.</div>;
      case 'services':
        return <div>Conteúdo dos serviços.</div>;
      case 'contact':
        return <div>Conteúdo de contato.</div>;
      default:
        return null;
    }
  };

  return <div className="content">{renderContent()}</div>;
};

export default Content;
