import { Box, Container, styled } from '@mui/material'
import React from 'react'

const SectionContainer = styled(Container)(({theme}) => ({
  backgroundColor: '#D9D9D9',
  height: '90vh',
  borderRadius: '50% 50% 0 0'
})); 

const FormPage = () => {
  return (
    <Box sx={{ backgroundColor: '#038C33', minHeight: '100vh', paddingTop: '10rem' }}>
      <SectionContainer>
        
      </SectionContainer>
    </Box>
  )
}

export default FormPage