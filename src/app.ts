import express from "express";
import leadRoutes from "./routes/lead.routes";
import { errorHandler } from "./middlewares/error.middleware";

console.log("DB:", process.env.DATABASE_URL);

const app = express();
app.use(express.json());

app.use("/leads", leadRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});