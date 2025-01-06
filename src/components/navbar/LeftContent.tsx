import { Button, Flex, Heading, HStack, Link } from '@chakra-ui/react';
import { Avatar } from '../ui/avatar';

const LeftContent = () => {
  return (
    <Flex alignItems='center' justifyContent='space-between' gap={4}>
      <Avatar
        size='2xl'
        name='Benito Correa'
        src='../src/assets/profile_pic.webp'
      />
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
