var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect(
    //connect here
);
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model("Todo", todoSchema);


var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
module.exports = function (app) {
    //get data from mongodb and pass it to view
    app.get("/todo", (req, res) => {
        Todo.find({}, (err, data) => {
            if (err) throw err;
            res.render("todo", {
                todos: data
            });
        })


    });
    app.post("/todo", urlencodedParser, (req, res) => {
        //get data from the view and add it to mongodb
        var newTodo = Todo(req.body).save((err, data) => {
            if (err) throw err;
            res.json(data);
        })

    });

    app.delete("/todo/:item", (req, res) => {
        //delete the requested item from mongodb
        Todo.find({
            item: req.params.item
        }).remove((err, data) => {
            if (err) throw err;
            // res.json(data);
            res.json(data);
        })
    });
};
