import { VStack } from 'native-base';
import React from 'react';

import { Header } from '../components/Header';

export function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600">
        <Header title= "Nova Solicitação" />
    </VStack>
  );
}