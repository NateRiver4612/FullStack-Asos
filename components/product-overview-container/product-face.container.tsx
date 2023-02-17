import React from "react";
import ProductFace from "../product-overview/product-face.component";

const ProductFace_Container = ({
  facets,
  filters,
  addFilters,
  clearFilters,
  active,
  handleSubmit,
  selectAllFilters,
  setActive,
}) => {
  return (
    <div className="w-[85%]  hidden sm:grid grid-cols-2 md:grid-cols-4 pt-2  xl:grid-cols-5 2xl:grid-cols-6 gap-4 pb-4">
      {facets.map((face: { id: React.Key }, index: Number) => (
        <ProductFace
          key={face.id}
          face={face}
          filters={filters}
          addFilters={addFilters}
          clearFilters={clearFilters}
          index={index}
          active={active}
          setActive={setActive}
          selectAllFilters={selectAllFilters}
          handleClick={setActive}
          handleSubmit={handleSubmit}
        />
      ))}
    </div>
  );
};

export default ProductFace_Container;
