"use client";
import React, { useEffect, useState } from "react";

const APICallExam = ({apiURL}) => {
  const [responseData, setResponseData] =useState(null);

  const getRequest = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    setResponseData(data);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button className="bg-red-100 p-2 rounded-md border border-red-500"
        onClick={getRequest}>
          Submit
        </button>
      </div>
      {responseData && (
        <div>
          <p>{responseData.secretCode}</p>
        </div>
      )}
    </div>
  );
};

export default APICallExam;
