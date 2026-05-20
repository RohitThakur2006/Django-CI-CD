import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HelloWorld from "./components/Hello"
import Teachers from "./components/Teachers"

import StateExample from './components/StateExample'
import Stock from './components/Stock'
import Mentor from "./components/Mentor"

import './App.css'
import './assets/css/styles.css'
import StudentList from './components/StudentList'
import Result from './components/Result'
import StudentContext from './context/StudentContext'
import InputBox from './components/InputBox'
import MyCounter from './components/MyCounter'
import Greeting from './components/Greeting'
import NameList from './components/NameList'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Register from './components/Register'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import Dashboard from './components/protected/Dashboard'
import CounterUseEffect from './components/CounterUseEffect'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

function App() {
  let id = 1001
  const receiveData = (data) => {
    console.log("Data from child:", data); 
  };
  const students = [
    {id: 1, name: "Amit", marks: 81},
    {id: 2, name: "Neha", marks: 74},
    {id: 3, name: "Karan", marks: 91},
    {id: 4, name: "Arjun", marks: 88},
  ]
  const studentName = "John"

  return (
    <>
      <StudentContext.Provider value={studentName}>
        {/* <h1 style={{ backgroundColor: "blue", color: "white", fontSize:"50px" }}>React Project</h1> */}
        {/* <HelloWorld/> */}
        {/* <StudentList/> */}
        {/* <Teachers name="Mark" id={id}/> */}
        {/* <Mentor sendData={receiveData} /> */}
        {/* <StateExample/> */}
        {/* <Stock/> */}
        {/* <Result students={students}/> */}
        {/* <Teachers/> */}
        </StudentContext.Provider>
        {/* <InputBox/>
        <MyCounter/>
        <Greeting isLoggedIn={false} name="John"/>
        <NameList/>
        <Stock/>
        <LoginForm/> */}
        {/* <RegisterForm/> */}
        {/* <CounterUseEffect /> */}
        <AuthProvider>
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/" element={<MainContent />}/>
              <Route path="/register" element={<PublicRoute><Register /></PublicRoute>}/> // to load the Register component
              <Route path="/login" element={<PublicRoute><Login /></PublicRoute>}/>
              <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </AuthProvider>
    </>
  )
}

export default App
