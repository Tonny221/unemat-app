import { Box, Button, Container, styled, TextField } from '@mui/material'
import React from 'react'
import logoImg from '../images/logo-white.png'

const Logo = styled(Box)(({ theme }) => ({
  width: 'fit-content',
  margin: '0 auto',
  paddingTop: '4rem'
}));

const LogInBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#D9D9D9',
  width: '100%',
  height: '90vh',
  borderRadius: '3rem',
  display: 'flex',
  alignItems: 'center',
  rowGap: '2rem',
  flexDirection: 'column',
  boxShadow: '1px -5px 25px 10px rgba(0,0,0,0.5)',
}));

const LogInContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#CDCDCD',
  width: '80%',
  textAlign: 'center',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1.5rem',
  borderRadius: '1rem',
  boxShadow: '-2px 10px 15px rgba(0,0,0,0.25)'
}));

const LogInTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#D9D9D9',
  padding: '0.75rem',
  borderRadius: '1rem',
  boxShadow: '2px 2px 15px rgba(0,0,0,0.25)'
}));

const LogInButton = styled(Button)(({theme}) => ({
  borderRadius: '0.75rem',
  paddingInline: '1.5rem',
  backgroundColor: '#038C33'
}));

const Login = () => {
  return (
    <Box sx={{ backgroundColor: '#251973', minHeight: '100vh' }}>
      <Logo>
        <img src={logoImg} alt='logo' />
      </Logo>
      <LogInBox paddingTop={'4rem'}>
        <LogInContainer>
          <LogInTextField variant='standard' placeholder='institucional@unemat.br' />
          <LogInTextField variant='standard' placeholder='senha (matricula)' />
        </LogInContainer>
        <Box>
          <LogInButton variant='contained'>Enviar</LogInButton>
        </Box>
      </LogInBox>
    </Box>
  )
}

export default Login