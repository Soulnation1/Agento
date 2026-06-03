import React from "react";

const WithWrapper = ({Children}) => {
  return (
    <div className="border-2 border-green-600 text-center">
      <h1 className="font-bold">Assignment 1</h1>
      <p className="underline font-semibold">
        wrapped components: i am adding myself to the component below
      </p>

      {Children}
    </div>
  );
};

export default WithWrapper;
