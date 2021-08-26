const express = require("express");
const app = express();

require("./routes/courseRoutes")(app);

const cors = require("cors");

app.use(cors());

const PORT = 5000;

app.listen(PORT);
