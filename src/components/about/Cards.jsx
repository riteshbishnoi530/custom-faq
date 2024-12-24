import React from 'react';
import { useParams, Link, useSearchParams} from 'react-router-dom';

const Cards = () => {
  const {Id } = useParams();
  const [searchParams, setSearchaparams] = useSearchParams();
  const age = searchParams.get('age');
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Params & Search Params</h1>

      <div className="container flex justify-center gap-6 bg-white rounded-lg shadow-md py-4">

        <button onClick={() => setSearchaparams({ age:'40'})}>age 40</button>
        <button onClick={() => setSearchaparams({ age:'50'})}>age 50</button>
        <Link
          to="/tab-1"
          className={`px-6 py-4 text-lg font-semibold transition ${Id === '1'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}>Tab 1
        </Link>
        <Link
          to="/tab-2"
          className={`px-6 py-4 text-lg font-semibold transition ${Id === '2'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}>Tab 2
        </Link>
        <Link
          to="/tab-3"
          className={`px-6 py-4 text-lg font-semibold transition  ${Id === '3'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}>Tab 3
        </Link>
      </div>
    </div>
  );
};

export default Cards;