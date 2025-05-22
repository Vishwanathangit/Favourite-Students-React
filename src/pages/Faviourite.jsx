import React from 'react';

const Faviourite = ({ favorites, setFavorites, disabledButtons, setDisabledButtons }) => {

  const handleDelete = (id) => {
    const updatedFavorites = favorites.filter(student => student.id !== id);
    setFavorites(updatedFavorites);

    const updatedDisabled = disabledButtons.filter(disabledId => disabledId !== id);
    setDisabledButtons(updatedDisabled);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Favourite Students</h1>
      {
        favorites.length === 0
          ? <p className="text-gray-600">No favourite students yet.</p>
          : favorites.map((student, index) => (
              <div key={student.id} className="mb-4 border p-4 rounded-md shadow-md flex justify-between items-center">
                <h2 className="text-lg font-medium">{index + 1}. {student.name}</h2>
                <button
                  onClick={() => handleDelete(student.id)}
                  className="ml-4 px-4 py-1 rounded bg-red-600 text-white hover:bg-red-700"
                >
                  Remove Favourite
                </button>
              </div>
            ))
      }
    </div>
  );
};

export default Faviourite;
