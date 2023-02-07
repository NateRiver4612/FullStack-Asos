import Router, { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

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
