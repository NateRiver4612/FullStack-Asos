import axios from "axios";

export default async function handler(req, res) {
  console.log("Goku", JSON.parse(req.body));

  const options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/products/v2/list",
    params: {
      store: "US",
      offset: "0",
      limit: "100",
      country: "US",
      sort: "freshness",
      currency: "USD",
      sizeSchema: "US",
      lang: "en-US",
      ...req.body,
    },
    headers: {
      "X-RapidAPI-Key": "f906b6c3a6msh49a5389c512d5c0p1819eajsn3b16cc8b1128",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  const response = await axios.request(options);

  return res.status(200).json(response.data);
}
