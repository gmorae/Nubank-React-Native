import React from 'react';
import Routes from './src/routes';
import { StatusBar } from "react-native";

export default function App() {
  return (
    // <> = fragment serve para incapsular mais de um componente
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8A05BE" />
      <Routes />
    </>
  );
}