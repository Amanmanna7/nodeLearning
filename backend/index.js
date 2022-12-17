let express=require('express');
let mongoConnect=require('./db');

const app=express();
const port=3000;
app.use(express.json());
mongoConnect();

const authRoute=require('./routes/auth');
const noteRoute=require('./routes/note');

app.use('/api/auth',authRoute);
app.use('/api/note',noteRoute);

app.listen(port,()=>{
    console.log("eNotes listening on the port "+port);
})