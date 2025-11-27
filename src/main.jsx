
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Provider from './pages/Provider';
import Book from './pages/Book';
import MyBookings from './pages/MyBookings';
import Login from './pages/Login';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='categories' element={<Categories />} />
          <Route path='category/:slug' element={<Category />} />
          <Route path='provider/:id' element={<Provider />} />
          <Route path='book/:id' element={<Book />} />
          <Route path='login' element={<Login />} />
          <Route path='my-bookings' element={<MyBookings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
