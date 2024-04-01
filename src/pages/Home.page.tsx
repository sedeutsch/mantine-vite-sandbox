import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Container, Title, Text } from '@mantine/core';

export const HomePage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Container mt="xl">
      <Drawer opened={opened} position="right" onClose={close} title="Authentication">
        <Title order={3}>Add assignments</Title>
        <Text>Can you see this content inside the drawer?</Text>
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </Container>
  );
};
