import React from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText,
  Information, TextInfo, Bold
} from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}
    >
      <Code>
        <QRCode
          value="https://google.com"
          backgroundColor="#8A05BE"
          logSize={80}
          color="#fff"
        />
      </Code>
      <Information>
        <TextInfo>Banco<Bold> 000 - Nu Pagamentos S. A.</Bold></TextInfo>
        <TextInfo>Agência <Bold>000</Bold></TextInfo>
        <TextInfo>Conta <Bold>00000000-0</Bold></TextInfo>
      </Information>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}