import express from "express"
import cors from "cors";
import bootstrap from "./src/app.controller.js"
const app = express()
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));
await bootstrap(app, express);
app.get("/", (req, res) => {
    res.send("Server is running ... 🚀");
});
const port = 3000
app.listen(port, "0.0.0.0", () => {
    console.log("server is running on port", port);
});
export default app;