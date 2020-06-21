import React from 'react';
import {
  Button,
  ButtonGroup,
  chakra,
  Badge,
  Checkbox,
  Box,
  Flex,
  Stack,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  StackDivider,
  SimpleGrid,
  Input,
  Radio,
  RadioGroup,
} from '@ALK-UI/core';

export const Communication: React.FC = () => {
  return (
    <chakra.header display="flex" flexDir="column" alignItems="left">
      <SimpleGrid row={4} spacing="20px" p="5px">
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Outdated</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>
        <Alert status="success">
          <AlertIcon />
          <AlertTitle mr={2}>Outdated</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>
        <Alert status="warning">
          <AlertIcon />
          <AlertTitle mr={2}>Outdated</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>
        <Alert status="info">
          <AlertIcon />
          <AlertTitle mr={2}>Outdated</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>
        <Input placeholder="Basic usage" />
        <RadioGroup defaultValue="Option 1" onChange={console.log}>
          <Stack>
            <Radio value="Option 1">Option 1</Radio>
            <Radio value="Option 2">Option 2</Radio>
            <Radio value="Option 3">Option 3</Radio>
          </Stack>
        </RadioGroup>
        <Stack align="start" direction={['column', 'row']} spacing={[2, 4, 6]}>
          <Checkbox value="one">One</Checkbox>
          <Checkbox value="two">Two</Checkbox>
          <Checkbox value="three">Three</Checkbox>
        </Stack>
      </SimpleGrid>
      <SimpleGrid columns={4} spacing="20px" p="5px">
        <Button variant="primary" size="xg">
          Primary
        </Button>
        <Button variant="secondary" size="xg">
          Secondary
        </Button>
        <Button variant="super" size="xg">
          Super
        </Button>
        <Button variant="attention" size="xg">
          Attention
        </Button>
      </SimpleGrid>
      <SimpleGrid columns={4} spacing="20px" p="5px">
        <Button variant="primary" size="lg">
          Primary
        </Button>
        <Button variant="secondary" size="lg">
          Secondary
        </Button>
        <Button variant="super" size="lg">
          Super
        </Button>
        <Button variant="attention" size="lg">
          Attention
        </Button>
      </SimpleGrid>
      <SimpleGrid columns={4} spacing="20px" p="5px">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="super">Super</Button>
        <Button variant="attention">Attention</Button>
      </SimpleGrid>
      <SimpleGrid columns={4} spacing="20px" p="5px">
        <Button variant="primary" size="sm">
          Primary
        </Button>
        <Button variant="secondary" size="sm">
          Secondary
        </Button>
        <Button variant="super" size="sm">
          Super
        </Button>
        <Button variant="attention" size="sm">
          Attention
        </Button>
      </SimpleGrid>
      <SimpleGrid columns={4} spacing="20px" p="5px">
        <Button variant="primary" size="xs">
          Primary
        </Button>
        <Button variant="secondary" size="xs">
          Secondary
        </Button>
        <Button variant="super" size="xs">
          Super
        </Button>
        <Button variant="attention" size="xs">
          Attention
        </Button>
      </SimpleGrid>
    </chakra.header>
  );
};

export default Communication;
