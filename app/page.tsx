'use client'
import { useState } from "react";
import NavBar from "./components/navBar";
import HomePage from "./components/homePage";
import About from "./components/About";
import Login from "./components/Login";
import Roblox from "./components/Roblox";
import Footer from "./components/Footer";
import Message from "./components/Message";


export default function Home() {
  const [sideBar, setSideBar] = useState(false)
  const [content, setcontent] = useState('home')
  const [message, setMessage] = useState(false)
  const [order, setOrder] = useState(false)


  function whatin() {
    if (content === 'home' && !message) {
      return (
        <>
          <NavBar content={content} setcontent={setcontent} setSideBar={setSideBar} sideBar={sideBar} />
          <HomePage setMessage={setMessage}/>
          <Login setSideBar={setSideBar} sideBar={sideBar} />
          <Footer setMessage={setMessage} setOrder={setOrder} />

        </>
      )
    }
    if (content === 'about' && !message) {
      return (
        <>
          <NavBar content={content} setcontent={setcontent} setSideBar={setSideBar} sideBar={sideBar} />
          <About />
          <Login setSideBar={setSideBar} sideBar={sideBar} />
          <Footer setMessage={setMessage} setOrder={setOrder} />

        </>
      )
    }
    if (content === 'roblox' && !message) {
      return (
        <>
          <NavBar content={content} setcontent={setcontent} setSideBar={setSideBar} sideBar={sideBar} />
          <Roblox />
          <Login setSideBar={setSideBar} sideBar={sideBar} />
          <Footer setMessage={setMessage} setOrder={setOrder} />
        </>
      )
    }
    if (message) {
      return (

        <Message message={message} setMessage={setMessage} />
      )
    }
  }
  return (
    whatin()
    
  )
}
