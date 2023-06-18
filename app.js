// External Imports
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Internal Imports
const eventsInfoRouter = require("./router/eventsInfoRouter");
const usersRouter = require("./router/usersRouter");
const connectDB = require("./db/ConnectDB");
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");

// Applicaiotn Initialization
const app = express();
dotenv.config();


// Request Parser
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Db Initialization
connectDB();

app.use("/", usersRouter);
app.use("/events", eventsInfoRouter);

// 404 not found handler
app.use(notFoundHandler);

// Common Error Handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`listening from port ${process.env.PORT}`);
});
