const app = require("./src/App");
let port = 3000;

app.listen(port, () => {
    console.log(`The server is live at ${port} port`);
})