const mongoose = require("mongoose")

// mongodb+srv://soaresvml:<password>@cluster0.rugznmq.mongodb.net/?retryWrites=true&w=majority
const user = "soaresvml";
const pass = "CuXjpXnY3LdpDhuk";
const database = "todo_sample";
const serverName = "cluster0.rugznmq.mongodb.net";

module.exports = {
    init: () => {
        mongoose
            .connect(
                `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    // useFindAndModify: false,
                    // useCreateIndex: true,
                }
            )
            .then((res) => console.log(`DB Connection Successful ${res}`))
            .catch((err) => console.log(`Error in DB Connection ${err}`));
    },
};