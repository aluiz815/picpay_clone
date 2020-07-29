import React from 'react';

import { Header,HeaderText,HeaderButton,ButtonLabel } from './styles';

const Notification = () => {
  return (
    <Header>
      <HeaderText>Notificações</HeaderText>
      <HeaderButton>
        <ButtonLabel>Configurar</ButtonLabel>
      </HeaderButton>
    </Header>
    
  );
}

export default Notification;