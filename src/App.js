import React from 'react';
import UserGreeting from './components/userGreeting/App';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <UserGreeting isLoggedIn={true} username="Bereket" />
        {/* Change isLoggedIn to false to test login message */}
      </div>
    </div>
  );
}

export default App;
