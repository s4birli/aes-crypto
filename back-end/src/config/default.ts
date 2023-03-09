const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const environment = {
  port: 3003,
  secret_key: process.env.SECRET_KEY || "",
};

export default environment;
