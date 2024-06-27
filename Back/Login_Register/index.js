const app = require("./app.js");
const { PORT } = require("./config.js");
//const { connecDb } = require("./database.js");

//connecDb();

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
