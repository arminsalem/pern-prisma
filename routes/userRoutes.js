const prisma = require("../config/dbConfig");
const { Router } = require("express");
const routes = Router();

routes.get("/", async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
routes.post("/", async (req, res, next) => {
  try {
    const email = `armin${Math.floor(Math.random() * 100)}@gmail.com`;
    const name = "armin";
    console.log(email, name);
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }

  res.status(201);
});

module.exports = routes;
