import React, { useState, useEffect } from "react";
import MyAccount from "../../../components/my-account";
import { useAuth } from "../../../context/authUserContext";
import MyAccount_Skeleton from "../../../components/my-account/my-account-skeleton";

const MyAccount_Page = () => {
  const { authUser } = useAuth();
  const [rendering, setRendering] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (authUser) {
        setRendering(false);
      }
    }, 3000);
  }, [authUser]);

  if (rendering) {
    return <MyAccount_Skeleton></MyAccount_Skeleton>;
  }

  return <MyAccount></MyAccount>;
};

export default MyAccount_Page;
