import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';

export default function Basic_button() {
  return <div>
      <Button colorScheme='green' onClick={console.log("fun times")}>Button</Button>
  </div>;
}
