import express, { Request, Response } from "express";
import { config } from "dotenv";
import path from "path";
import fs from "fs";

//tipando as variaveis - TypeScript
interface IUser{
  name: string
  age: number
}

config();
const app = express();
//http://localhost/client/home.html
app.use("/client", express.static(path.join(__dirname, "public")));
const url = process.env.API_BASE_URL ?? `http://localhost`;
const port = process.env.API_PORT ?? 3300;

//defino users usando interface
const users: IUser[] = [
  {
    name: "Fulano",
    age: 20,
  },
  {
    name: "Ciclano",
    age: 47,
  },
];

// Rota principal
app.get("/api", (req: Request, res: Response): void => {
  // const homePagePath = path.join(__dirname, "/public/home.html");
  // const homePage = fs.readFileSync(homePagePath);
  res.status(200).send('<h1 style="color: steelblue">Hello World</h1>');
  //res.status(200).send(homePage);
});

app.get("/api/users", (req: Request, res: Response): void => {
  res.json(users)
});

// Inicializando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na url:${url}:${port}`);
});
