import React from 'react';
import { Text } from 'react-native';

const MinMax = ({ min, max }) => {
  return (
    <Text>
      O valor {max} é maior que o valor {min}!
    </Text>
  );
};

export default MinMax;
