'use client'
import { useState } from "react";
import NavBar from "./components/navBar";
import HomePage from "./components/homePage";
import About from "./components/About";
import Login from "./components/Login";
import Roblox from "./components/Roblox";
import Footer from "./components/Footer";


export default function Home() {
  const [sideBar, setSideBar] = useState(false)
  const [content, setcontent] = useState('roblox')

  function whatin() {
    if (content === 'home') {
      return (
        <HomePage />
      )
    }
    if (content === 'about') {
      return (
        <About />
      )
    }
    if (content === 'roblox') {
      return (
        <Roblox />
      )
    }
  }
  return (
    <>
      <NavBar content={content} setcontent={setcontent} setSideBar={setSideBar} sideBar={sideBar} />
      {whatin()}
      <Login setSideBar={setSideBar} sideBar={sideBar} />
      <Footer/>
    </>
  )
}
