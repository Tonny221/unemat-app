import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { SectionContainer, UserAvatar } from './FormPage'

const Background = styled(Box)(({ theme }) => ({
  backgroundColor: '#251973',
  minHeight: '100vh'
}));

const DataInfo = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}));

const IdPage = () => {
  return (
    <Background sx={{ paddingTop: '8rem' }}>
      <SectionContainer>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <UserAvatar />
        </Box>
        <DataInfo>
          <Typography variant='h4' fontWeight={200}>Breno Andrade Jurri</Typography>
          <Typography>Bacharelado em Ciências da Computação</Typography>
          <Typography>Cursando</Typography>
          <Typography>82398478923</Typography>
        </DataInfo>
      </SectionContainer>
    </Background>
  )
}

export default IdPage