import React, { useState } from 'react'
import HomePage from './components/HomePage'
import './App.css';
import PetsContext from './context/PetsContext';
import UsersContext from './context/UsersContext';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom"
import ProfilePage from './components/ProfilePage';
import MyPetsPage from './components/MyPetsPage';
import SearchPage from './components/SearchPage';
import SmilePage from './components/SmilePage';

function App() {

  return (
    <PetsContext>
      <UsersContext>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/mypets' element={<MyPetsPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/smile' element={<SmilePage />} />
            {/* <Route path='/pet' element={<PetPage />} />
          <Route path='/admin' element={<Admin />} /> */}
          </Routes>
        </div>
      </UsersContext>
    </PetsContext>
  );
}

export default App;
