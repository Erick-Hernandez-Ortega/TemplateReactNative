import React, { FC } from 'react';
import { styles } from './styles';
import DI from '../../../di/ioc';
import { Text } from 'react-native';

const ExampleScreen: FC = () => {
  const { name } = DI.resolve('ExampleViewModel');

  return (
    <Text style={styles.text}>Hola Mundo: {name}</Text>
  );
};

export default ExampleScreen;
