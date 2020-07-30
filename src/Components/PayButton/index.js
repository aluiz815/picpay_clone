import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native'

import { Button,Label } from './styles';

const PayButton = ({ onPress, focused }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
      colors={focused ?['#1B5E20','#1B5E20'] 
      : ['#00fc6c','#00fc6c']  }
      start={[1,0.2]}
      >
        <MaterialIcons 
        name='attach-money'
        size={30}
        color='#fff'/>
        <Label 
        focused={focused}
        >Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}

export default PayButton;