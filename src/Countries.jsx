import React from 'react'
import {useState,useEffect} from 'react';



function Card({common,png}) {
  return (
    <div
        className="countryCard"
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
        <h2><span>{common}</span></h2>
        
    </div>
  )
}


const Endpoint="https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";



function Countries() {

    const [apiData,setApiData]= useState([]);
    const[query,setQuery]=useState("");

    useEffect(()=>{
        fetch(Endpoint).then((response)=>response.json()).then((data)=>{
            setApiData(data);
        }).catch((error)=>
            console.error("Error fetching data: ",error)
        );
    },[])



  return (
    <>
    <div style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
    }}>
        <input 
        type="text"
        placeholder="Search for Countries..."
        style={{
            width:"600px",
            height:"25px"
        }}
        onChange={(e)=>setQuery(e.target.value.toLowerCase())}
        />

    </div>
    <div
        style={{
            display:"flex",
            flexWrap:"wrap",
            margin:"10px",
            justifyContent:"center"
        }}
    >
       {apiData.filter((country)=>country.common.toLowerCase().includes(query)).map(({common,png},index)=>
       (<Card key={index} common={common} png={png}/>)
    )}
    </div>
    </>
  );
}

export default Countries