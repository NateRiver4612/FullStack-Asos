import axios from "axios";

export default async function handler(req, res) {
  const { categoryId } = JSON.parse(req.body);

  const options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/products/v2/list",
    params: {
      store: "US",
      offset: "0",
      categoryId: `${categoryId}`,
      limit: "10",
      country: "US",
      sort: "freshness",
      currency: "USD",
      sizeSchema: "US",
      lang: "en-US",
    },
    headers: {
      "X-RapidAPI-Key": "f906b6c3a6msh49a5389c512d5c0p1819eajsn3b16cc8b1128",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);

  res.status(200).json(response.data);
}
