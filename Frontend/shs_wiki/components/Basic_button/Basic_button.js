import React from 'react';
import { Button, ButtonGroup, useControllableState, Box, text } from '@chakra-ui/react';

export default function Basic_button() {
    const [value, setValue] = useControllableState({ defaultValue: 40 })
    return (
      <div>
        <Box as='span' w='10px' mx = '24'></Box>
        <Button onClick={() => setValue(value + 1)}>+</Button>
        <Box as='span' w='200px' mx='24px'>
          {value}
        </Box>
        <Button onClick={() => setValue(value - 1)}>-</Button>
      </div>
    )
}
