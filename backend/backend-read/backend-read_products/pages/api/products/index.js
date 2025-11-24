import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  console.log(request.method);
  if (request.method === "GET") {
    const products = await Product.find();
    response.status(200).json(products);
    return;
  }
  if (request.method === "POST") {
    console.log("request.body: ", request.method);

    const productData = request.body;
    await Product.create(productData);
    response.status(201).json({ status: "Product created" });
    return;
  }
  response.status(405).json({ status: "Method not allowed" });
}
