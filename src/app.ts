import express,{Application ,Request , Response,NextFunction} from "express"
const app:Application = express()

app.get('/',(req,res)=>{
    res.send('Hello');

});

app.listen(5000,()=>{console.log('server running ')})