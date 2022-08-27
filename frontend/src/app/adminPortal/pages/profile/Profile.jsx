import React from 'react'
import { PersonalDetailsSettings } from './components/PersonalDetailsSettings';

export const Profile = () => {
  return (
    <div className="settings">
      <main className="main-wrap">
        <h2>Settings</h2>
        {/* {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />} */}
        <PersonalDetailsSettings />
      </main>
    </div>
  );
}
