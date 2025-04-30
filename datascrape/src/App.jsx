import Header from "../component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { useEffect, useState } from "react";
import Slider from "../component/Slider";

function App() {

  const [menu, setMenu] = useState([])

  const getMenu = async () => {
    try {
      let data = await fetch(`http://localhost:8000/menu`, {
        method: "GET",
      });
      let res = await data.json();
      setMenu(res[0].header); 
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const [slider , setSlider] = useState([])

  const getSlider = async () => {
    try {
      let data = await fetch(`http://localhost:8000/menu`, {
        method: "GET",
      });
      let res = await data.json();
      setSlider(res[0].slider); 
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  
  useEffect(() => {
    getSlider();
  },[])

  return (
    <>
      <Header menuList={menu}/>
      <Slider sliderList={slider}/>
    </>
  )
}

export default App

// https://www.maxfashion.in/in/en/