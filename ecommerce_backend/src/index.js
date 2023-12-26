const express = require("express");
const app = express();
const env = require("dotenv");
// routes authentication
const userRoutes = require("./routes/auth");
// routes of the admin
const adminRoutes = require("./routes/admin/auth");
// routes for the category
const categoryRoutes = require("./routes/category");
// routes for the product
const productRoutes = require("./routes/product");
// routes for the cart
const cartRoutes = require("./routes/cart");
// routes for the initialData 
const initialDataRotes = require("./routes/admin/intialData");
// routes for the page
const pageRoutes = require("./routes/admin/page");
// roues for the order
const orderRoutes = require("./routes/order");
// routes for the order admin
const adminOrderRoutes = require("./routes/admin/order");
// environment variables or constants
const addressRoutes = require("./routes/address");

env.config();
//database connection
const mongoose = require("mongoose");
// cors
const cors = require("cors");
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.33mtcp3.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
app.use("/api", pageRoutes);
app.use("/api", productRoutes);
app.use("/api", userRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", cartRoutes);
app.use("/api", initialDataRotes);
app.use("/api", addressRoutes);
app.use("/api", orderRoutes);
app.use("/api", adminOrderRoutes);
//listening to the port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
