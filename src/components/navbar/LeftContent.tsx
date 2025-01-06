import { Button, Flex, Heading, HStack, Link, List } from '@chakra-ui/react';

const LeftContent = () => {
  return (
    <Flex alignItems='center' justifyContent='space-between' gap={4}>
      <Heading color='teal' fontWeight='black' size='5xl'>
        BC
      </Heading>

      <HStack gap={2} display={{ base: 'none', md: 'flex' }}>
        <Button as={Link} color='teal' variant='ghost'>
          About
        </Button>
        <Button as={Link} color='teal' variant='ghost'>
          Portfolio
        </Button>
        <Button as={Link} color='teal' variant='ghost'>
          Contacts
        </Button>
      </HStack>
    </Flex>
  );
};

export default LeftContent;
