import React from 'react';

const Home = ({ students, favorites, setFavorites, disabledButtons, setDisabledButtons }) => {

  const handleFavi = (item) => {
    setFavorites([...favorites, item]);
    setDisabledButtons([...disabledButtons, item.id]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Students</h1>
      {
        students.map((item) => (
          <div key={item.id} className="mb-4 border p-4 rounded-md shadow-md flex justify-between items-center">
            <h2 className="text-lg font-medium">{item.id}. {item.name}</h2>
            <button
              onClick={() => handleFavi(item)}
              disabled={disabledButtons.includes(item.id)}
              className={`ml-4 px-4 py-1 rounded 
                ${disabledButtons.includes(item.id) 
                  ? 'bg-gray-500 text-white cursor-not-allowed' 
                  : 'bg-black text-white hover:bg-gray-800'}`}
            >
              {disabledButtons.includes(item.id) ? "Added to Favourite" : "Add to Favourite"}
            </button>
          </div>
        ))
      }
    </div>
  );
};

export default Home;
