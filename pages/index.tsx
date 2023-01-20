import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { selectLoading } from "../redux/features/loading/loading.slice";
import { useAppSelector } from "../redux/hooks";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/men");
  }, []);

  const isLoading = useAppSelector(selectLoading);

  console.log(isLoading);

  return (
    <div className="dark">
      <h1 className="text-sm dark:bg-blue-500 font-bold underline">
        Default page
      </h1>
    </div>
  );
}
