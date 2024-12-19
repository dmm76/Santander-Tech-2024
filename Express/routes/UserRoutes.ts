import { Router } from "express";
import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";
//import { cwd } from 'node:process';

//tipando as variaveis - TypeScript
type User = {
  id: string;
  name: string;
  age: number;
};

type CreateUserDTO = Omit<User, "id">;

const userRoutes = Router();

userRoutes.use("/client", express.static(path.join(__dirname, "public")));


let users: User[];
const dbJsonPath = path.resolve(process.cwd(), 'server.json');
try {
  const dbData = JSON.parse(fs.readFileSync(dbJsonPath, 'utf-8'));
  users = dbData.users || []; 
  console.log("Dados carregados com sucesso:", users);
} catch (error) {
  console.error('Erro ao carregar o arquivo server.json:');
}

userRoutes.get("/api/users", (req: Request, res: Response): void => {
  res.json(users);
});

userRoutes.post("/api/users", (req: Request, res: Response): void => {
  const { name, age }: CreateUserDTO = req.body;

  if (!name) {
    res.status(400).send("O nome é obrigatório.");
    return;
  }

  if (age === undefined || age === null || age < 0) {
    res
      .status(400)
      .send("A idade é obrigatória e deve ser maior ou igual a zero.");
    return;
  }

  const user = { id: randomUUID(), name, age };
  users.push(user);

  // Atualiza o arquivo 'server.json' com a estrutura correta
  try {
    const updatedData = { users }; // Estrutura { users: [...] }
    fs.writeFileSync(dbJsonPath, JSON.stringify(updatedData, null, 2), "utf-8");
    console.log("Dados salvos com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar os dados no server.json:");
    res.status(500).send("Erro ao salvar os dados.");
    return;
  }

  res.status(201).json(user);
});

userRoutes.delete("/api/users/:id", (req: Request, res: Response): void => {
  const { id } = req.params;

  if (!id) {
    res
      .status(400)
      .send("Para ser deletado, é necessário fornecer um ID válido.");
    return;
  }

  // Filtra os usuários, removendo o usuário com o ID especificado
  const filteredUsers = users.filter((user) => user.id !== id);

  // Verifica se algum usuário foi removido
  if (filteredUsers.length === users.length) {
    res.status(404).send("Usuário não encontrado.");
    return;
  }

  // Atualiza o array global de usuários
  users = filteredUsers;

  // Reescreve o arquivo server.json com os usuários atualizados
  try {
    fs.writeFileSync(dbJsonPath, JSON.stringify({ users }, null, 2), "utf-8");
    console.log("Usuário deletado com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar os dados no server.json:");
    res.status(500).send("Erro ao deletar o usuário.");
    return;
  }

  res.status(204).send(); // 204 No Content
});

userRoutes.put("/api/users", (req: Request, res: Response): void => {
  res.json(users);
});

export {userRoutes}