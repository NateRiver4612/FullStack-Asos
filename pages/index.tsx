import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import clientPromise from "../utils/mongodb";

export default function Home({ isConnected }) {
  const router = useRouter();

  if (isConnected) {
    console.log("Connected to MongoDB");
  } else {
    console.log("Connecting failed");
  }

  useEffect(() => {
    router.push("/men");
  }, []);

  return (
    <div className="dark">
      <h1 className="text-sm dark:bg-blue-500 font-bold underline">
        Default page
      </h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    await clientPromise;

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
