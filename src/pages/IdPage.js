import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { SectionContainer, UserAvatar } from './FormPage'
import QRCode from '../images/qr-code.png'
import Logo from '../images/logo-black.png'
import profilePic from '../images/profile-pic.png'

const Background = styled(Box)(({ theme }) => ({
  backgroundColor: '#251973',
  minHeight: '100vh'
}));

const DataInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}));

const QrCodeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}));

const IdPage = () => {
  return (
    <Background sx={{ paddingTop: '8rem' }}>
      <SectionContainer>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <UserAvatar src={profilePic} sx={{border: '0.5rem solid #D9D9D9'}}/>
        </Box>
        <DataInfo>
          <Typography mt={2} variant='h4' fontWeight={200}>Breno Andrade Jurri</Typography>
          <Typography fontSize={14}>Bacharelado em Ciências da Computação</Typography>
          <Typography mt={2} fontStyle={'italic'}>Cursando</Typography>
          <Typography fontWeight={600}>82398478923</Typography>
        </DataInfo>
        <QrCodeBox mt={4}>
          <img alt='qrcode' src={QRCode} />
          <Typography>1234567</Typography>
        </QrCodeBox>
        <Box mt={14} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img alt='logo' src={Logo} />
        </Box>
      </SectionContainer>
    </Background>
  )
}

export default IdPage