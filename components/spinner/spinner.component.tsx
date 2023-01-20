import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectLoading } from "../../redux/features/loading/loading.slice";

const Spinner = () => {
  const isLoading = useAppSelector(selectLoading);

  return (
    <div className="h-screen w-screen top-0 bg-gray-200/60 overflow-hidden bottom-0 z-40 fixed flex justify-center items-center">
      <div
        className="spinner-border text-gray-400 z-50 animate-spin inline-block w-10 h-10 border-4 rounded-full"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
