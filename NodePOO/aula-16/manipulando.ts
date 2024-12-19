//import products from "./produtos.json";

import { writeFileSync } from "node:fs";
import {join} from "node:path";

const productJson = JSON.stringify(
  [
    {
      name: "Pair of Socks",
      amountInStock: 100,
      unitValue: 5,
    },
    {
      name: "T-shirt",
      amountInStock: 500,
      unitValue: 25,
    },
  ],
  null,
  0
);

const fileOutPath = join(__dirname, "generated-producs.json");
writeFileSync(fileOutPath, productJson);

const products = JSON.parse(productJson);

console.log(productJson);
console.log(products);
