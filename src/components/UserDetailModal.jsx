import React from "react";

const UserDetailModal = ({ isOpen, user, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="z-10 absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="p-10">
        <div className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl w-full h-auto overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">User Details</h2>
          {user ? (
            <>
              <div className="mb-2">
                <strong>Name:</strong> {user.name}
              </div>
              <div className="mb-2">
                <strong>Username:</strong> {user.username}
              </div>
              <div className="mb-2">
                <strong>Email:</strong> {user.email}
              </div>
              <div className="mb-2">
                <strong>Phone:</strong> {user.phone}
              </div>
              <div className="mb-2">
                <strong>Website:</strong>{" "}
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.website}
                </a>
              </div>
              <div className="mb-2">
                <strong>Address:</strong> {user.address?.street}, {user.address?.city}, {user.address?.zipcode}
              </div>
              <div className="mb-2">
                <strong>Company:</strong> {user.company?.name} - {user.company?.catchPhrase}
              </div>
            </>
          ) : (
            <p className="text-red-500">No user details available.</p>
          )}
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

export default UserDetailModal;
