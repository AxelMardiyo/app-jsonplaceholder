import React, { useState } from "react";

const PostsModal = ({ isOpen, posts, onClose }) => {
  // State to manage comments visibility and comments data
  const [comments, setComments] = useState([]);
  const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false);

  // Function to fetch comments for a specific post
  const fetchComments = async (postId) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      const data = await res.json();
      setComments(data);
      setIsCommentsModalOpen(true); // Open comments modal
    } catch (error) {
      console.log(error);
    }
  };

  // If modal is not open, return null
  if (!isOpen) return null;

  return (
    <div className="z-10 absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="p-10">
        <div className="bg-white p-8 rounded-lg shadow-2xl max-w-4xl w-full h-screen overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Posts</h2>
          <ul className="list-none">
            {posts.map((post) => (
              <li key={post.id} className="mb-4">
                <h3 className="font-bold text-lg">{post.title}</h3>
                <p className="text-gray-700">{post.body}</p>
                <button
                  className="mt-2 bg-blue-500 text-white font-bold py-1 px-3 rounded"
                  onClick={() => fetchComments(post.id)}
                >
                  View Comments
                </button>
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

      {/* Comments Modal */}
      {isCommentsModalOpen && (
        <CommentsModal
          comments={comments}
          onClose={() => setIsCommentsModalOpen(false)}
        />
      )}
    </div>
  );
};

// Separate CommentsModal Component
const CommentsModal = ({ comments, onClose }) => {
  return (
    <div className="z-20 absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="p-10">
        <div className="bg-white p-8 rounded-lg shadow-2xl max-w-4xl w-full h-screen overflow-y-auto">
          <h3 className="text-xl font-semibold mb-2">Comments</h3>
          <ul className="list-none">
            {comments.map((comment) => (
              <li key={comment.id} className="mb-4 p-4 bg-gray-100 rounded-md shadow-md">
                <strong className="text-blue-600">{comment.name}</strong>{" "}
                <span className="text-gray-500">({comment.email})</span>:
                <p className="text-gray-700 mt-1">{comment.body}</p>
              </li>
            ))}
          </ul>
          <button
            className="mt-4 bg-gray-500 text-white font-bold py-1 px-3 rounded"
            onClick={onClose}
          >
            Close Comments
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostsModal;