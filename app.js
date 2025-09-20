const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./rotas/auth");
const privateRoutes = require("./rotas/private");

const app = express();
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api", privateRoutes);

app.get("/", (req, res) => {
  res.send("API Supply rodando!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
