import React from 'react';

import { 
  Wrapper, 
  Header,
  HelpButton,
  HelpLabel,
  UserInfo,
  UserImg,
  UserId,
  Username,
  UserProfile,
  UserProfileLabel,
  MyAccount,
  MyAccountLabel,
  MyInfoContainer,
  MyInfo,
  MyInfoLabel,
  
} from './styles';

import UserImage from '../../../assets/avatar.png';

const Settings = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <HelpButton>
            <HelpLabel>Ajuda</HelpLabel>
          </HelpButton>
          <UserInfo>
            <UserImg source={UserImage}/>
            <UserId>@aluiz815</UserId>
            <Username>André Luiz</Username>
            <UserProfile>
              <UserProfileLabel>Ver meu perfil > </UserProfileLabel>
            </UserProfile>
          </UserInfo>
          
        </Header>
        <MyAccount>
            <MyAccountLabel>Minha conta</MyAccountLabel>
        </MyAccount>
        <MyInfoContainer>
          <MyInfo>Meu PicPay</MyInfo>
          <MyInfoLabel>@aluiz815</MyInfoLabel>
        </MyInfoContainer>
        <MyInfoContainer>
          <MyInfo>Meu Número</MyInfo>
          <MyInfoLabel>(**)*****-5544</MyInfoLabel>
        </MyInfoContainer>
        
        <MyInfoContainer>
          <MyInfo>Meu E-mail</MyInfo>
          <MyInfoLabel>a*****@g***l.com</MyInfoLabel>
        </MyInfoContainer>
        
        <MyInfoContainer>
          <MyInfo>Dados Pessoais</MyInfo>
          <MyInfoLabel>Nome,CPF e data de nascimento</MyInfoLabel>
        </MyInfoContainer>
        
        <MyInfoContainer>
          <MyInfo>Conta Bancaria</MyInfo>
        </MyInfoContainer>
        
        <MyInfoContainer>
          <MyInfo>Taxas e limites</MyInfo>
        </MyInfoContainer>
        
        <MyInfoContainer>
          <MyInfo>Meus Endereços</MyInfo>
        </MyInfoContainer>
        
        <MyInfoContainer>
          <MyInfo>Meus favoritos</MyInfo>
        </MyInfoContainer>
        
        <MyInfoContainer>
          <MyInfo>Validar Identidade</MyInfo>
          <MyInfoLabel>Não verificado</MyInfoLabel>
        </MyInfoContainer>
        <MyAccount>
            <MyAccountLabel>Promoções</MyAccountLabel>
        </MyAccount>
        <MyInfoContainer>
          <MyInfo>Usar código promocional</MyInfo>
        </MyInfoContainer>
        <MyInfoContainer>
          <MyInfo>Convide seus amigos</MyInfo>
        </MyInfoContainer>
        <MyAccount>
            <MyAccountLabel>Minhas assinaturas</MyAccountLabel>
        </MyAccount>
        <MyInfoContainer>
          <MyInfo>Ver Minhas Assinaturas</MyInfo>
        </MyInfoContainer>
      </Wrapper>
    </>
  );
}

export default Settings;