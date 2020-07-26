import React from 'react';
import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';

import { Wrapper,Header,BalanceContainer,BalanceTitle,Balance,Container } from './styles';

import Suggestions from '../../Components/Suggestions';
import Activities from '../../Components/Activities';
import Tips from '../../Components/Tips';
import Banner from '../../Components/Banner';

const Home = () => {
  return (
    <Wrapper>
      <Container>
      <Header>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86c" />

        <BalanceContainer>
          <BalanceTitle>Meu Saldo</BalanceTitle>
          <Balance>R$ 0,00</Balance>
        </BalanceContainer>

        <AntDesign name="gift" size={30} color="#10c86c" />

      </Header>
      <Suggestions/>
      <Activities/>
      <Tips/>
      <Banner/>
      </Container>
    </Wrapper>
    );
}

export default Home;