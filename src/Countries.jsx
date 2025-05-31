import React from 'react'
import {useState,useEffect} from 'react';



function Card({common,png}) {
  return (
    <div
        style={{
            display:"flex",
            flexDirection:"column",
            border:"1px solid grey",
            height:"200px",
            width:"200px",
            borderRadius:"10px",
            gap:"10px",
            textAlign:"center",
            justifyContent:"center",
            alignItems:"center",
            margin:"10px"
        }}
    >
        <img src={png} alt={`flag of ${common}`}  style={{width:"120px",height:"120px"}}/>
        <h3>{common}</h3>


    </div>
  )
}


const Endpoint="https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";



function Countries() {

    const [apiData,setApiData]= useState([]);

    useEffect(()=>{
        fetch(Endpoint).then((response)=>response.json()).then((data)=>{
            setApiData(data);
        }).catch((error)=>
            console.error("Error fetching data: ",error)
        );
    },[])



  return (
    <>
    
    <div
        style={{
            display:"flex",
            flexWrap:"wrap",
            margin:"10px",
            justifyContent:"center"
        }}
    >
       {apiData.map(({common,png},index)=>
       (<Card key={index} common={common} png={png}/>)
    )}
    </div>
    </>
  );
}

export default Countries