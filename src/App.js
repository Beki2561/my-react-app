import React from 'react';
import Updatelist from './components/Updatelist/App';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">🍽️ My Food Manager</h1>
      <Updatelist />
    </div>
  );
}

export default App;
