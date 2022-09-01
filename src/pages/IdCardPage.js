import { Avatar, Box, styled } from '@mui/material'
import React from 'react'

const CardBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#038C33',
  height: '34rem',
  width: '22rem',
  margin: '30% auto',
  borderRadius: '4rem'
}));

const DataBox = styled(Box)(({ theme }) => ({

}));

const UserInfoCard = styled(Box)(({ theme }) => ({

}));

const UserAvatarCard = styled(Avatar)(({ theme }) => ({

}));

const IdCardPage = () => {
  return (
    <CardBox>
      <DataBox>
        <UserInfoCard>
          <UserAvatarCard />
          
        </UserInfoCard>
      </DataBox>
    </CardBox>
  )
}

export default IdCardPage