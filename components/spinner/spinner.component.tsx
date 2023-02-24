import React from "react";

const Spinner = () => {
  return (
    <div className="h-screen w-screen top-0 left-0 bg-gray-400/80 overflow-hidden bottom-0 z-40 fixed flex justify-center items-center">
      <div
        className="spinner-border text-gray-300 z-50 animate-spin inline-block w-10 h-10 border-4 rounded-full"
        role="status"
      >
        <span className="visually-hidden">
          <img loading="lazy" src="/dynamic_incon.svg" />
        </span>
      </div>
    </div>
  );
};

export default Spinner;
