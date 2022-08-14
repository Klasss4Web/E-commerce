import React from 'react'
// import { Header } from '../components/Header';
import { Main } from '../components/HomeComponents/Main';
// import { Sidebar } from '../components/Sidebar';
// import SideBar from "../components/sidebar/index";

export const HomePage = () => {
  return (
    <div>
      {/* <main className="main-wrap"> */}
      {/* <Header />
      <SideBar /> */}
      <main className="main-wrap">
        <Main />
      </main>
      {/* </main> */}
    </div>
  );
}
