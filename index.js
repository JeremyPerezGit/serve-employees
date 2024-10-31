import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: ["http://localhost:5173"] }));

const sampleEmployee = {
  name: {
    first: "Katarina",
    last: "Fletcher",
  },
  email: "katarina.fletcher@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
  },
};

app.get("/employees", (req, res) => {
  res.json({ results: [sampleEmployee] });
});

const port = 3310;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
