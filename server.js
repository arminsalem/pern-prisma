const express = require("express");
const { PrismaClient } = require("@prisma/client");

const userRoutes = require("./routes/userRoutes");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the API, Prisma");
});
app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`server is running on port: ${port}..`);
});
