import React from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import { MainWrap, Container } from './styled';

const Home = () => {
  const navigate = useNavigate();
  
  const handleLogOut = () => {
    localStorage.clear();
    navigate('/login', { replace: true });
  };

  return (
    <MainWrap>
      <Container>
        <button onClick={handleLogOut}>Log Out</button>
        <h1>Home page</h1>
      </Container>
    </MainWrap>
  );
};

export default Home;
