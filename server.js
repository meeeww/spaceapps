const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "dist"))); // Sirve tus archivos estáticos desde el directorio 'dist'

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/html/menuPrincipal.html"));
});

app.use(express.static(path.join(__dirname, "src")));
