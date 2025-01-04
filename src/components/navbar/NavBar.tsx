import { HStack } from '@chakra-ui/react';
import RightContent from './RightContent';

const NavBar = () => {
  return (
    <HStack
      width='full'
      alignItems='center'
      justifyContent='space-between'
      p={4}
      bg='red.emphasized'
    >
      {/* left content */}
      <h1>BC</h1>

      {/* right content */}
      <RightContent />

      {/* Middle Content */}
      <h1>Toggle</h1>
    </HStack>
  );
};

export default NavBar;
