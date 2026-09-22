const express=require("express")
const app=express();
app.use(express.json())
let port=3000;

let user=[
];

//C - create
app.post("/create", (req,res) => {
    let body= req.body;
    user.push(body);
    res.send("user saved successfully");
});


//R- get - Read
app.get("/", (req,res) => {
    res.send(user); //ye database se retrival mein help karta h(get)
});

//D - Delete
app.delete("/delete/:id", (req, res) => {
    let { id } = req.params;
    let userData = user.filter((val) => val.id !== id);
    user=userData;
    res.send("User deleted successfully!!");
});


//U - Update
app.put("/update/:id", (req,res) => {
    let { id }= req.params;
    let { name }= req.body;
    let updateUserData = user.map((val) => 
    val.id === id ? {...val, name}:val);

    res.send(updateUserData);
});

app.listen(port, () => {
    console.log(`Server is running at ${port} port`);
})