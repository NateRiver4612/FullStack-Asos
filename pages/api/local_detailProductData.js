import axios from "axios";
import { ProductDetail } from "../../public/detailProduct.data";

export default async function handler(req, res) {
  const data = ProductDetail[0];

  return res.status(200).json(data);
}
