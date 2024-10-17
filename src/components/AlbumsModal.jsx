import React from "react";

const AlbumsModal = ({ isOpen, albums, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="z-10 absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="p-10">
        <div className="bg-white p-8 rounded-lg shadow-2xl max-w-4xl w-full h-screen overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Albums</h2>
          <ul className="list-none space-y-4">
            {albums.map((album) => (
              <li key={album.id} className="bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition duration-200">
                <h3 className="font-bold text-lg">{album.title}</h3>
                {/* Optional: Add an icon or thumbnail here */}
                {/* <img src={album.thumbnailUrl} alt={album.title} className="w-16 h-16 rounded-md" /> */}
              </li>
            ))}
          </ul>
          <button
            className="mt-4 bg-red-500 text-white font-bold py-2 px-6 rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlbumsModal;