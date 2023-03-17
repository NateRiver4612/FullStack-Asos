import ProductOverview_Skeleton from "./product-overview.skeleton";

const ProductOverview_Container_Skeleton = ({ similarList }) => {
  return (
    <div
      className={`grid transition-all ${
        similarList
          ? "w-full grid-cols-3 sm:grid-cols-5"
          : "grid-cols-2 w-[85%] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      } duration-1000  gap-3`}
    >
      <ProductOverview_Skeleton></ProductOverview_Skeleton>
      <ProductOverview_Skeleton></ProductOverview_Skeleton>
      <ProductOverview_Skeleton></ProductOverview_Skeleton>
      <ProductOverview_Skeleton></ProductOverview_Skeleton>
      <ProductOverview_Skeleton></ProductOverview_Skeleton>
      <ProductOverview_Skeleton></ProductOverview_Skeleton>
      <ProductOverview_Skeleton></ProductOverview_Skeleton>
      <ProductOverview_Skeleton></ProductOverview_Skeleton>
    </div>
  );
};

export default ProductOverview_Container_Skeleton;
