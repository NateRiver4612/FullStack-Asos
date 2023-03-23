import AccountSidebar_Skeleton from "./account-sidebar.skeleton";

const MyAccount_Skeleton = () => {
  return (
    <div className="h-screen lg:h-fit pb-[5%] absolute top-0 lg:px-[15%] 2xl:px-[20%] w-screen bg-gray-200 z-30">
      <div className="header animate-pulse  w-[97.5%] p-2 sm:px-2 sm:py-8 flex justify-between items-center">
        <div className="h-6 w-[20%] bg-gray-100"></div>

        <div className="h-6 w-[20%] bg-gray-100"></div>

        <div className="h-6 w-[20%] bg-gray-100"></div>
      </div>
      <div className="body pb-10 animate-pulse  px-2 lg:px-0 flex bg-gray-200 gap-3 ">
        <AccountSidebar_Skeleton></AccountSidebar_Skeleton>

        <div className="hidden sm:block w-[65%] relative ">
          <div className=" left-8 bg-white w-[90%] h-[90vh]  absolute flex gap-1 flex-col">
            <div className="flex flex-col gap-1 mt-16 ml-10">
              <div className="w-[12vw] h-10 bg-gray-200"></div>
              <div className="w-[14vw] h-10 bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount_Skeleton;
