import { Button, HStack } from '@chakra-ui/react';
import LeftContent from './LeftContent';

const NavBar = () => {
  return (
    <HStack
      width='full'
      alignItems='center'
      justifyContent='space-between'
      p={4}
      borderBottomWidth={1}
    >
      {/* left content */}
      <LeftContent />

      {/* toggle */}
      <Button>Toggle</Button>
    </HStack>
  );
};

export default NavBar;
