import express from "express";
import bodyParser = require("body-parser");
import { PrismaClient } from "@prisma/client";
import { Person } from "./modules/users";

const prisma = new PrismaClient();
const app = express();
app.use(bodyParser.json({ type: 'application/json' }))

app.get("/users", async (req, res) => {
	const users = await prisma.user.findMany()
	return res.status(200).json(users)
})

app.post("/users", async (req, res) => {
	const {name, email} = req.body;

	const user = await prisma.user.create({
		data: new Person(name, email)
	})
	return res.status(201).json(user);
})

app.listen(3000, () => {
	console.log("Server running")
})
