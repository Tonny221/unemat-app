import { Avatar, Box, Container, styled, TextField, Typography } from '@mui/material'
import React from 'react'
import { CustomButton } from './Login'

export const SectionContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#D9D9D9',
  height: '90vh',
  borderRadius: '4rem 4rem 0 0',
}));

export const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: '8rem',
  height: '8rem',
  boxShadow: '0px 2px 5px rgba(0,0,0,0.25)',
  marginTop: '-4rem'
}));

const UserAvatarBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '1rem'
}));

const FormBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1rem'
}));

const FormTextField = styled(TextField)(({ theme }) => ({
  width: '12rem',
  borderRadius: '9rem'
}));

const FormPage = () => {
  return (
    <Box sx={{ backgroundColor: '#038C33', minHeight: '100vh', paddingTop: '10rem' }}>
      <SectionContainer>
        <UserAvatarBox>
          <UserAvatar />
          <Typography sx={{ textDecoration: 'underline', cursor: 'pointer', color: 'rgba(0,0,0,0.5)' }}>Escolha uma foto de perfil</Typography>
        </UserAvatarBox>
        <FormBox>
          <Typography mt={4}>Confirme os seus dados:</Typography>
          <FormTextField variant='outlined' placeholder='Nome:' />
          <FormTextField variant='outlined' placeholder='CPF:' />
          <FormTextField variant='outlined' placeholder='Matricula:' />
          <Box alignSelf={'flex-end'} sx={{display: 'flex', flexDirection: 'column', rowGap: '1rem'}}>
            <Typography>Crie uma nova senha:</Typography>
            <FormTextField variant='outlined' />
          </Box>
          <CustomButton sx={{width: '8rem', alignSelf: 'center', marginTop: '1rem'}} variant='contained'>Confirmar</CustomButton>
        </FormBox>
      </SectionContainer>
    </Box>
  )
}

export default FormPage