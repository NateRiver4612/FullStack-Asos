import { motion } from "framer-motion";
import ProductAdvertise_Skeleton from "./product-advertise.skeleton";
import ProductDisplay_Skeleton from "./product-display.skeleton";
import ProductInformation_Skeleton from "./product-information.skeleton";
import ProductRating_Skeleton from "./product-rating.skeleton";
import ProductSimliarities_Skeleton from "./product-simliarities.skeleton";

const Product_Detail_Skeleton = ({ similarItems }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex flex-col animate-pulse items-center 2xl:pl-[20%] 2xl:pr-[20%] lg:pl-[10%] lg:pr-[10%] md:pr-[5%] sm:pr-[5%] sm:pl-[5%]"
    >
      <div className="flex flex-col w-full sm:flex-row">
        <ProductDisplay_Skeleton></ProductDisplay_Skeleton>

        <ProductInformation_Skeleton></ProductInformation_Skeleton>
      </div>

      <ProductSimliarities_Skeleton
        similarItems={similarItems}
      ></ProductSimliarities_Skeleton>

      <ProductRating_Skeleton></ProductRating_Skeleton>

      <ProductAdvertise_Skeleton></ProductAdvertise_Skeleton>
    </motion.div>
  );
};
export default Product_Detail_Skeleton;
