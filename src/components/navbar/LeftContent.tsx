import { Button, Flex, Heading, HStack, List } from '@chakra-ui/react';

const LeftContent = () => {
  return (
    <Flex alignItems='center' justifyContent='space-between' gap={4}>
      <Heading color='teal' fontWeight='black' size='5xl'>
        BC
      </Heading>

      <HStack gap={2} display={{ base: 'none', md: 'flex' }}>
        <Button>About</Button>
        <Button>Portfolio</Button>
        <Button>Contacts</Button>
      </HStack>
    </Flex>
  );
};

export default LeftContent;
