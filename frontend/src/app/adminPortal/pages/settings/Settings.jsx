import React from 'react'
import { PersonalDetailsSettings } from './components/PersonalDetailsSettings';
import { SettingsSideBar } from './components/SettingsSideBar';

export const Settings = () => {
  return (
    <div className="settings">
      <main className="main-wrap">
        <h2 className="mb-3">Settings</h2>
        {/* {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />} */}
        <SettingsSideBar />
      </main>
    </div>
  );
}
