import { homePageData } from "../public/data";

export async function LoadHomePageData() {
  //   const response = await fetch("http://localhost:3000/api/homePageData");
  //   const homePageData = await response.json();

  return homePageData;
}
