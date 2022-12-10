import { Routes, Route } from "react-router-dom"


import HTMLPage, { HtmlPage } from "../Pages/Html"
import React from 'react'
import All from "../Pages/All"
import CSSPage from "../Pages/Css"
import JAVASCRIPTPage from "../Pages/Javascript"

const Routesdata = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<All/>} />
        <Route path="/html" element={<HTMLPage />} />
        <Route path="/css" element={<CSSPage />} />
        <Route path="javascript" element={<JAVASCRIPTPage/>} />
      </Routes>
    </div>
  )
}

export default Routesdata
