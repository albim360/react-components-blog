import React from "react";

const Card = () => {
  return (
    <div className="container mx-auto max-w-screen-md">
      <div className="flex justify-center">
        <div className="card w-full max-w-sm">
          <img src="https://dummyimage.com/600x400/000/fff" alt="Card image" />
          <div className="card-content">
            <h2 className="text-lg font-bold">Card title</h2>
            <p className="text-gray-700">Card content</p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">Leggi di più</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
