import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { Profile } from './Profile.jsx';

const HomePage = ({ user }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-200 to-purple-200">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-white">Welcome, {user.displayName}!</h1>
        <button
          onClick={() => signOut(auth)}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Sign Out
        </button>
      </div>
      <main className="p-4">
        <div className="bg-white/30 backdrop-filter backdrop-blur-lg rounded-lg p-8">
          <Profile />
        </div>
      </main>
    </div>
  );
};

export { HomePage };
