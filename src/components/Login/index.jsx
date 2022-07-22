import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import { 
  MainWrapper, 
  Image, 
  LoginWrap, 
  Container,
  InputWrap,
  Input,
  Button,
} from './styled';

const Login = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  
  const handleSubmit = () => {
    localStorage.setItem('credentials', JSON.stringify(credentials));
    navigate('/home', {replace: true});
  };

  const handleKeyPress = (e) => {
    if (!ref.current.disabled) {
      if (e.key === 'Enter') {
        handleSubmit(e);
      };
    };
  };

  const handleChange = ({ target: { name, value } }) => {
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <MainWrapper>
      <Image />
      <LoginWrap>
        <Container>
          <h1>Log In</h1>
          <InputWrap>
            <h2>Your email</h2>
            <Input 
              type="text"
              id="email"
              name="email"
              placeholder="username"
              value={credentials.email}
              onChange={handleChange}
              onKeyDown={handleKeyPress}
            />
          </InputWrap>
          <InputWrap>
            <h2>Your password</h2>
            <Input 
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={credentials.password}
              onChange={handleChange}
              onKeyDown={handleKeyPress}
            />
          </InputWrap>
          <Button
            ref={ref}
            disabled={!credentials.email.length || !credentials.password.length}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Container>
      </LoginWrap>
    </MainWrapper>
  );
};

export default Login;
