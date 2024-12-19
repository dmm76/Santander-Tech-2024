import express, { Request, Response } from "express";
import { config } from "dotenv";
import { userRoutes } from "./routes/UserRoutes";
import cors from 'cors'

//configurar a aplicacao para trabalhar com post em json
const app = express();
app.use(express.json());
//preparando usabilidade SPA
app.use(cors())
//importando do arquivo .env
config();
const url = process.env.API_BASE_URL ?? `http://localhost`;
const port = process.env.API_PORT ?? 3300;

// Rota principal
app.get("/api", (req: Request, res: Response): void => {
  res.status(200).send("<h1>API BASE URL</h1>");
});



app.use(userRoutes)

// Inicializando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na url:${url}:${port}`);
});
