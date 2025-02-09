import React from "react";
import './index.css';
import { WEBSITE_NAME, LOCATION, MAPVIEW,WEBSITE_DESCRIPTION, WEBSITE_URL, IMAGES, BUTTON1, BUTTON2 } from './config';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">{WEBSITE_NAME}</h1>
      <h3 className="text-2xl font-semibold text-center text-gray-700"><b>Location: </b> {LOCATION}.<a href={ MAPVIEW} className="text-1xl text-blue-600 m-1"> See Map .</a></h3>
      <p className="text-2xl mx-10 my-10 text-gray-800">{WEBSITE_DESCRIPTION}</p>
      <div className="flex justify-center">
        <img src={IMAGES} alt="Website Image" className="rounded-lg shadow-lg mb-6" />
      </div>
      <div className="flex justify-center gap-10">
        <a href={WEBSITE_URL}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out">
            {BUTTON1}
          </button>
        </a>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out">
          {BUTTON2}
        </button>
      </div>
    </div>
  )
}
