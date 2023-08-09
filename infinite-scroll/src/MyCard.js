import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

const MyCard = ({imgUrl,title,dateTime}) => {
    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 767);
      };  
    useEffect(() => {
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [isMobile]); 
    
  return (
    <>
    <CardWrapper>
      <Box>
      <img
        style={{ height: "100px",borderRadius:"15px" }}
        src={imgUrl}
        title="green iguana"
      />
      </Box>
      <Box>
        {
            isMobile ?(<TitleText variant="body2" >
            {title.slice(0,30)+"..."}
          </TitleText>):(<TitleText variant="body2" >
            {title.slice(0,70)+"..."}
          </TitleText>)
        }
        <Typography variant="body2" color="text.secondary">
          {dateTime}
        </Typography>
      </Box>
    </CardWrapper>
    </>
  )
}

const CardWrapper=styled(Card)({
    display:"flex",
    columnGap:"20px",
    marginBottom:"20px",
    boxShadow:"none",


})
const TitleText=styled(Typography)({
    marginBottom:"10px",
    fontSize:"16px",
    '@media(max-width:767px)':{
        fontSize:"14px"

    }
})
 


export default MyCard
