import React, { useState, useEffect } from 'react';
import { doc, onSnapshot, updateDoc, arrayUnion } from 'firebase/firestore';
import { auth, db } from './firebase';

const Profile = () => {
  const [ailments, setAilments] = useState([]);
  const [newAilment, setNewAilment] = useState('');

  useEffect(() => {
    if (auth.currentUser) {
      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      const unsubscribe = onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          setAilments(doc.data().previous_ailments || []);
        }
      });
      return () => unsubscribe();
    }
  }, []);

  const handleAddAilment = async (e) => {
    e.preventDefault();
    if (newAilment.trim() === '') return;

    const userDocRef = doc(db, 'users', auth.currentUser.uid);
    await updateDoc(userDocRef, {
      previous_ailments: arrayUnion(newAilment)
    });
    setNewAilment('');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Previous Ailments</h2>
      <ul className="list-disc pl-5 mb-6">
        {ailments.map((ailment, index) => (
          <li key={index} className="text-gray-700">{ailment}</li>
        ))}
      </ul>
      <form onSubmit={handleAddAilment}>
        <input
          type="text"
          value={newAilment}
          onChange={(e) => setNewAilment(e.target.value)}
          placeholder="Add a new ailment"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Add Ailment
        </button>
      </form>
    </div>
  );
};

export { Profile };
