import styled from '@emotion/styled'
import { Box, Container, Typography } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react'
import MyCard from './MyCard';

const MyFeed = ({mdata}) => {
    const [currentArrayIndex, setCurrentArrayIndex] = useState(0);
    const [loadingState, setLoadingState] = useState(false);
    const iScrollRef = useRef(null);
    const handleScroll = (e) => {
        if (
          iScrollRef.current.scrollTop + iScrollRef.current.clientHeight >=
          iScrollRef.current.scrollHeight - 20 
        ) {
          loadNextArray(mdata);
        }
      };
      useEffect(() => {
          iScrollRef.current.addEventListener('scroll', handleScroll);
          return () => {
            iScrollRef.current.removeEventListener('scroll', handleScroll);
          };
      }, [loadingState]);
      const loadNextArray = () => {
        if(currentArrayIndex === 2){
            return
        }
        if (currentArrayIndex <= 2 && !loadingState) {
          setLoadingState(true);
          setTimeout(() => {
            setCurrentArrayIndex((prevIndex) => prevIndex + 1);
            setLoadingState(false);
          }, 1000);
        }
      };
      const displayItems = () => {
        if(mdata.length){
            const displayedItemsArray = mdata.filter((item, index) => index <= currentArrayIndex)
            const displayedItems= displayedItemsArray.map((res,i)=>{
                return res.map((res,i)=>{
                    const timestamp = res.last_update;
                    const date = new Date(timestamp * 1000); 
                    const dateTimeString = date.toLocaleString();
                    return(
                        <MyCard title={res.title} imgUrl={res.ImageStyle_thumbnail} dateTime={dateTimeString} style={{display:"block"}} key={res.nid}/>
                    )
                })
            })
            return displayedItems;
        }
        return
      };
  return (
    <>
        <Container maxWidth="sm">
            <DataBox ref={iScrollRef}>
            {displayItems()}
             {loadingState && <LoadingText>Loading More Items... <img style={{height:"30px"}} src={require('./images/loading.gif')}/></LoadingText>}              
            </DataBox>
        </Container>
    </>
  )
}

export default MyFeed

const DataBox=styled(Box)({
    height:"100vh",
    overflow:"auto"
})
const LoadingText=styled(Typography)({
    display:"flex",
    alignItems:"center",
    columnGap:"15px"
})