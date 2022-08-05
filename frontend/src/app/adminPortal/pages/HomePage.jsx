import React from 'react'
import { Header } from '../components/Header';
import { Main } from '../components/HomeComponents/Main';
import { Sidebar } from '../components/Sidebar';

export const HomePage = () => {
  return (
    <div>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <Main />
      </main>
    </div>
  );
}
