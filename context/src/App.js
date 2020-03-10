import React from 'react';
import './App.css';
import ProfileProvider from './profileContext';
import Profile from './profile.js'
import ChangeUsername from './changeUsername.js';

function App() {
  return (
    <div className="App">
      <ProfileProvider>
        <Profile />
        <ChangeUsername />
      </ProfileProvider>
    </div>
  );
}

export default App;
