const express = require("express");
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

const indexRouter =require("./routers/index")
const todoRouter =require("./routers/todo")

app.use("/", indexRouter);
app.use("/todos", todoRouter);

// In appplications, we cannot put in all endpoints in the same file one below the other
// That is why in the dir "Routes", this different endpoints are defined    
// And in the dir controllers, the instructions to the Services that will be executed are defined. 

module.exports = app;