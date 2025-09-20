const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://jhsabakeviski:bdIrhVVBufSwlUbO@dbfirst.wtbpc1w.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB conectado!"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

module.exports = mongoose;
