import React from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import { MainWrap, Container } from './styled';

const NotFound = () =>  {
  const navigate = useNavigate();
  
  return (
    <MainWrap>
      <Container>
        <h1>404</h1>
        <p>Opps. Sorry! We couldn't search this page!!!</p>
        <button onClick={() => navigate('/home', { replace: true })}>Go Home</button>
      </Container>
    </MainWrap>
  );
};


export default NotFound;
