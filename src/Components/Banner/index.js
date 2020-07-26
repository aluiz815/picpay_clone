import React from 'react';

import { Container,Details,Img,Title,Description } from './styles';

import img13 from '../../../assets/13.png'

const Banner = () => {
  return (
    <Container>
    <Details>
      <Title>Cobre Um Amigo</Title>
      <Description>Mantenha Suas Parcerias em Dia, use o picpay para fazer suas cobrancas.</Description>
    </Details>
    <Img source={img13}/>
    </Container>
  );
}

export default Banner;