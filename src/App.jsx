
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

export default function App(){
  return (
    <div>
      <Header />
      <main className="container my-4"><Outlet /></main>
      <footer className="bg-light py-3 text-center"><small>© Universal Booking</small></footer>
    </div>
  );
}
