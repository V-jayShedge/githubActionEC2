const express = require("express");
const app = express();


app.get("/users", (req,res) => {
    res.status(200).json({
        result: [
            {
                name: "john",
                age: 28
            },
            {
                name: "jacob",
                age: 29
            },
            {
                name: "kevin",
                age: 30
            }
        ]
    })
})

app.get("/test", (req, res)=>{
    res.status(200).send("this is test routes")
})

app.listen(8000, () => {
    console.log("Server up and running on port 8000")
})

