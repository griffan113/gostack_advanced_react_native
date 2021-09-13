import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtomText } from './styles';

interface ButtomProps extends RectButtonProperties {
  children: string;
}

const Buttom: React.FC<ButtomProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <ButtomText>{children}</ButtomText>
  </Container>
);

export default Buttom;
