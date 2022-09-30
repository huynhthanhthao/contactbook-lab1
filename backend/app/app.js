import express from "express";
import cors from "cors";

const app = express();
const PORT = config.app.port;

app.use(cors());

app.use("/api/contacts", contactRouter);

app.use((req, res, next) => {
    res.status(400).json({ success: false, message: "Invalid request!" });
});

app.listen(PORT, (req, res) => {
    console.log(`Server connected in port ${PORT}`);
});
