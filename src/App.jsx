import React, { useEffect, useState } from "react";
import Image from "./components/image";
import SideBar from "./components/SideBar";
import Footer from "./components/footer";


const App = () => {


  
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const[showModel, setShowModel] = useState(false)
  
  useEffect(()=>{
    const fetchData = async () =>{
      const NASA_API = import.meta.env.VITE_NASA_API_KEY
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API}`

      const today = (new Date()).toDateString();
      const localKey = `NASA_${today}`

      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData);
        console.log('fetched from cache today');
        return;
      }
      localStorage.clear();
  
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log('fetched from API today');
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const handleShowModel = () =>{
    setShowModel(!showModel);
    console.log(showModel)
  }

  return (
    <>
      {data ? (<Image data = {data} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModel && (<SideBar handleShowModel = {handleShowModel} data ={data} />)}
      {data && (<Footer handleShowModel = {handleShowModel} data ={data} />)}
    </>
  );
};

export default App;
