import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  console.log("Server Request: /api/products");
  response.status(200);
  response.json(getAllProducts());
}
