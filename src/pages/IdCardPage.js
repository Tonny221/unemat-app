import { Avatar, Box, styled, Typography } from '@mui/material'
import React from 'react'
import Logo from '../images/logo-black.png'
import profilePic from '../images/profile-pic-square.png'

const CardBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#038C33',
  height: '34rem',
  width: '22rem',
  margin: '30% auto',
  borderRadius: '4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const DataBox = styled(Box)(({ theme }) => ({
  transform: 'rotate(270deg)',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}));

const UserInfoCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  columnGap: '1rem',
  width: '28rem',
  color: 'white'
}));

const UserAvatarCard = styled(Avatar)(({ theme }) => ({
  width: '6rem',
  height: '6rem',
  border: '10px solid #4F9A24',
  borderRadius: '2rem',
  transform: 'rotate(90deg)'
}));

const IdCardPage = () => {
  return (
    <CardBox>
      <DataBox>
        <UserInfoCard mb={4}>
          <Box>
            <UserAvatarCard src={profilePic} variant='square' />
          </Box>
          <Box>
            <Typography variant='h4' fontWeight={200}>Breno Andrade Jurri</Typography>
            <Typography textAlign={'center'} fontWeight={600}>Ativo/Cursando</Typography>
          </Box>
        </UserInfoCard>
        <Box marginLeft={16} sx={{scale: '1.2'}}>
          <img alt='logo' src={Logo} />
        </Box>
      </DataBox>
    </CardBox>
  )
}

export default IdCardPage