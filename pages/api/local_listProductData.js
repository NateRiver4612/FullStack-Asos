import axios from "axios";
import { ListProduct } from "../../public/listProduct.data";

export default async function handler(req, res) {
  const data = ListProduct[0];

  return res.status(200).json(data);
}
