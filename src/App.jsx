import React from 'react'
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
import PetPage from './components/PetPage';
import AdminDashboard from './components/AdminDashboard';
import AddPet from './components/AddPet';
import PrivateRoute from './components/PrivateRoute';
import PrivateRouteAdmin from './components/PrivateRouteAdmin';

function App() {

  return (
    <UsersContext>
      <PetsContext>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/profile'
              element={<PrivateRoute> <ProfilePage /> </PrivateRoute>} />
            <Route path='/mypets'
              element={<PrivateRoute> <MyPetsPage /> </PrivateRoute>} />
            <Route path='/search'
              element={<PrivateRoute> <SearchPage /> </PrivateRoute>} />
            <Route path='/smile'
              element={<PrivateRoute> <SmilePage /> </PrivateRoute>} />
            <Route path='/pets/:id'
              element={<PrivateRoute> <PetPage /> </PrivateRoute>} />
            <Route path='/admin'
              element={<PrivateRouteAdmin> <AdminDashboard /> </PrivateRouteAdmin>} />
            <Route path='/addpet'
              element={<PrivateRouteAdmin> <AddPet /> </PrivateRouteAdmin>} />
          </Routes>
        </div>
      </PetsContext>
    </UsersContext>
  );
}

export default App;
