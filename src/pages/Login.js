import { Box, Container, styled, TextField } from '@mui/material'
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
  boxShadow: '1px -5px 25px 10px rgba(0,0,0,0.5)',
}));

const LogInContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#CDCDCD',
  width: '80%',
  textAlign: 'center'
}));

const Login = () => {
  return (
    <Box sx={{ backgroundColor: '#251973', minHeight: '100vh' }}>
      <Logo>
        <img src={logoImg} alt='logo' />
      </Logo>
      <LogInBox paddingTop={'5rem'}>
        <LogInContainer>
          <TextField label='Email' placeholder='institucional@unemat.br' />
          <TextField label='Senha' placeholder='senha (matricula)' />
        </LogInContainer>
      </LogInBox>
    </Box>
  )
}

export default Login