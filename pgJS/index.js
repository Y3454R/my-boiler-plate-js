const app = require("./src/libs/express");
const routes = require("./src/routes/index");

const port = 5000;

// entry route
app.get("/", (req, res) => {
  res.send({ status: "running" });
});

// api route
app.use("/api", routes);

app.listen(port, () => console.log(`server running at port: ${port}`));
