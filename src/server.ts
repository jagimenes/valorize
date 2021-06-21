import express from "express";

const app = express();

app.get("/", (req, res) => {
    console.log("GET");
    return res.json({ok: true});
});

app.post("/", (req, res) => {
    console.log(req.body);
    return res.json({ok: true});
});

app.listen(3333, () => {
    console.log("Server started on port 3333 🚀");
});