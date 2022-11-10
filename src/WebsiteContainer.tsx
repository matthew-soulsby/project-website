import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { IconSun, IconMoonStars, IconPrompt } from '@tabler/icons';
import { AppShell, Header, Group, ActionIcon, useMantineColorScheme, UnstyledButton, Title, Button, Space } from '@mantine/core';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function WebsiteContainer() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  
    return (
      <BrowserRouter>
        <AppShell
          padding="md"
          fixed={false}
          header={
            <Header height={60}>
              <Group sx={{ height: '100%' }} px={20} position="apart">
                
                <Group>
                  <UnstyledButton component={Link} to='/'>
                    <Group position='center'>
                      <IconPrompt/>
                      <Title size={24}>Matthew Soulsby</Title>
                    </Group>
                  </UnstyledButton>
                  
                  <Space w='md'/>
                  
                  <Button variant="subtle" component={Link} to='/'>
                    Home
                  </Button>
                  <Button variant="subtle" component={Link} to='/projects'>
                    Projects
                  </Button>
                </Group>
                
                <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                  {colorScheme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
                </ActionIcon>

              </Group>
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
          })}
        >
          <Routes>
            <Route
              element={<Home/>}
              path='/'
            />
            <Route
              element={<Projects/>}
              path='/projects'
            />
          </Routes>
        </AppShell>
      </BrowserRouter>
    );
}