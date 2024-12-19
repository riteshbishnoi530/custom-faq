import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Cards = () => {
  const { tabId } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Interactive Tabs</h1>

      <div className="container flex justify-center gap-6 bg-white rounded-lg shadow-md py-4">
        <Link
          to="/tabs/1"
          className={`px-6 py-4 text-lg font-semibold transition ${tabId === '1'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}>Tab 1
        </Link>
        <Link
          to="/tabs/2"
          className={`px-6 py-4 text-lg font-semibold transition ${tabId === '2'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}>Tab 2
        </Link>
        <Link
          to="/tabs/3"
          className={`px-6 py-4 text-lg font-semibold transition ${tabId === '3'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}>Tab 3
        </Link>
      </div>
    </div>
  );
};

export default Cards;