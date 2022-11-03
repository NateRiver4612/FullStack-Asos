import Head from "next/head";
import Image from "next/image";
import axios from "axios";

export default function Home() {
  return (
    <div className="dark">
      <h1 className="text-sm dark:bg-blue-500 font-bold underline">
        Default page
      </h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const options = {
  //   method: "GET",
  //   url: "https://asos2.p.rapidapi.com/products/v2/list",
  //   params: {
  //     store: "US",
  //     offset: "0",
  //     categoryId: "4209",
  //     limit: "48",
  //     country: "US",
  //     sort: "freshness",
  //     currency: "USD",
  //     sizeSchema: "US",
  //     lang: "en-US",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "f906b6c3a6msh49a5389c512d5c0p1819eajsn3b16cc8b1128",
  //     "X-RapidAPI-Host": "asos2.p.rapidapi.com",
  //   },
  // };

  // const { data } = await axios.request(options);

  // console.log(data);

  return {
    props: {
      data: "Hello",
    },
  };
}
