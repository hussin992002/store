'use client'
import { useState } from "react";
import NavBar from "./components/navBar";
import HomePage from "./components/homePage";
import About from "./components/About";
import Login from "./components/Login";


export default function Home() {
  const [sideBar, setSideBar] = useState(false)
  const [content, setcontent] = useState('')
  return (
    <>
      <NavBar content={content} setcontent={setcontent} setSideBar={setSideBar} sideBar={sideBar} />
      {content == 'home' ? <HomePage /> : ''}
      {content == '' ? <HomePage /> : ''}
      {content == 'about' ? <About /> : ''}
      <Login setSideBar={setSideBar} sideBar={sideBar} />
    </>
  )
}
