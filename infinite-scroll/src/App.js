import { useEffect, useState } from "react";
import MyFeed from "./MyFeed";


function App() {
  useEffect(()=>{
    getData();
  },[])
  const getData=async()=>{
    const allData=[]
    try{
      const page1=await fetch("https://infinite-express.onrender.com/page1")
      .then((res)=>res.json())
      allData.push(page1)
    }
    catch(err){
      console.log(err)
    }
    try{
      const page2=await fetch("https://infinite-express.onrender.com/page2")
      .then((res)=>res.json())
      allData.push(page2)
    }
    catch(err){
      console.log(err)
    }
    try{
      const page3=await fetch("https://infinite-express.onrender.com/page3")
      .then((res)=>res.json())
      allData.push(page3)
    }
    catch(err){
      console.log(err)
    }
    setMdata(allData)
  }
  const[mdata,setMdata]=useState([])
  return (

    <>
      <MyFeed mdata={mdata}/>
    </>
  );
}

export default App;
