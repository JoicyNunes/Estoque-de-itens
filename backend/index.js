import express from "express";
import cors from "cors";
import userRoutes from './routes/registrations.js';
import orderRoutes from './routes/orders.js';  

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);  
app.use("/orders", orderRoutes);  

const PORT = 8800;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
