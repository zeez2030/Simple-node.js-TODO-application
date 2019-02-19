const express = require('express');
const todoController = require('./controllers/todo-controller');
const app = express();

// set template engine //#endregion
app.set('view engine', 'ejs');


//static files //#endregion

app.use(express.static('./public'));



//listen to port //#endregion

app.listen(5500);
console.log('you are listening to port 5500');
//fire controllers //#endregion
todoController(app);