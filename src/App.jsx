import React, { useState } from 'react'
import HomePage from './components/HomePage'
import './App.css';
import PetsContext from './context/PetsContext';
import UsersContext from './context/UsersContext';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom"

function App() {

  const [searchInput, setSearchInput] = useState('')

  return (
    <PetsContext>
      <UsersContext>
      <div className="App">
        <Header searchInput={searchInput} setSearchInput={setSearchInput} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/profile' element={<Profile />} />
          <Route path='/mypets' element={<MyPets />} />
          <Route path='/pet' element={<PetPage />} />
          <Route path='/search' element={<Search />} />
          <Route path='/admin' element={<Admin />} /> */}
          
        </Routes>
      </div>
      </UsersContext>
    </PetsContext>
  );
}

export default App;
