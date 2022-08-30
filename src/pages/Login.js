import { Box, Container, styled } from '@mui/material'
import React from 'react'
import logoImg from '../images/logo-white.png'

const Login = () => {
  return (
    <Container sx={{ backgroundColor: '#251973', minHeight: '100vh'}}>
        <Box sx={{width: 'fit-content', margin: '0 auto'}}>
            <img src={logoImg} alt='logo' />
        </Box>
    </Container>
  )
}

export default Login