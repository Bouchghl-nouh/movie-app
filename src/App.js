import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Detail } from './Detail'
export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
            </Routes >
    )
}