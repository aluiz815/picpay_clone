import React,{ useState } from 'react';
import { Feather,MaterialCommunityIcons,FontAwesome,AntDesign } from '@expo/vector-icons'
import { Switch } from 'react-native';
import { Wrapper
  ,Container
  ,Header
  ,HeaderContainer
  ,Title
  ,BalanceContainer
  ,Value
  ,Bold
  ,EyeButton
  ,Info
  ,Actions
  ,Action
  ,ActionLabel
  ,UseBalance
  ,UseBalanceTitle
  ,PaymentMethods
  ,PaymentMethodsTitle
  ,Card
  ,CardBody
  ,CardDetails
  ,CardTitle
  ,CardInfo
  ,Img
  ,AddButton
  ,AddLabel
  ,UseTicketContainer
  ,UseTicketButton
  ,UseTicketLabel
 } from './styles';

import CreditCard from '../../../assets/credit-card.png';

const Wallet = () => {
  const [isVisible,setIsVisible] = useState(true);
  const [useBalance,setUseBalance] = useState(true);

  function HandleToggleVisibility(){
    setIsVisible((e)=> !e)
  }

  function HandleToggleUseBalance(){
    setUseBalance((e)=>!e);
  }
  return (
    <Wrapper>
      <Container>
      <Header colors={useBalance ? ['#52e78c','#1ab563'] : ['#d3d3d3','#868686']}>

        <HeaderContainer>

          <Title>Saldo PicPay</Title>

          <BalanceContainer>

            <Value>
              R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
            </Value>

            <EyeButton onPress={HandleToggleVisibility}>
              <Feather name={isVisible ? "eye" : "eye-off"} size={28} color="#fff"/>
            </EyeButton>

          </BalanceContainer>

        <Info>
          Seu Saldo Esta Rendendo 100% do CDI
        </Info>

        <Actions>

          <Action>
            <MaterialCommunityIcons name="cash" size={28} color="#fff"/>
            <ActionLabel>Adicionar</ActionLabel>
          </Action>
          
          <Action>
            <FontAwesome name="bank" size={20} color="#fff"/>
            <ActionLabel>Adicionar</ActionLabel>
          </Action>
        </Actions>

        </HeaderContainer>

      </Header>

      <UseBalance>

        <UseBalanceTitle>
          Usar Saldo Ao Pagar
        </UseBalanceTitle>

        <Switch value={useBalance} onValueChange={HandleToggleUseBalance}/>

      </UseBalance>

      <PaymentMethods>

        <PaymentMethodsTitle>
          Formas de Pagamento
        </PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>

              <CardTitle>Cadastre Seu Cartao De Credito</CardTitle>

              <CardInfo>
                Cadastre seu cartao de credito para poder fazer
                pagamentos mesmo quando nao tiver saldo no seu 
                picpay.
              </CardInfo>

            </CardDetails>

            <Img source={CreditCard} resizeMode="contain"/>  
          </CardBody>
          <AddButton>
            <AntDesign name="pluscircleo" size={30} color="#0db060"/>
            <AddLabel>
              Adicionar Cartao De Credito
            </AddLabel>
          </AddButton>
        </Card>
        <UseTicketContainer>
  
          <UseTicketButton>
            <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060"/>
            <UseTicketLabel>Usar Codigo Promocional</UseTicketLabel>
          </UseTicketButton>
        </UseTicketContainer>
      </PaymentMethods>
      </Container>
    </Wrapper>
    );
}

export default Wallet;