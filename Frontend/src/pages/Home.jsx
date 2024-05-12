import React from 'react';
// import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import MainHeader from '../components/MainHeader';
import MainBody from '../components/MainBody';
import MainTaskBar from '../components/MainTaskBar';


const Container = styled('div')({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
});

const Header = styled('div')({
  minHeight: '25%',
});

const Body = styled('div')({
  minHeight: '50%',
});

const TaskBar = styled('div')({
  minHeight: '15%',
});

export default function Home() {
  return (
    <Container>
      <Header>
        <MainHeader />
      </Header>
      <Body>
        <MainBody />
      </Body>
      <TaskBar>
        <MainTaskBar />
      </TaskBar>
    </Container>
  );
}