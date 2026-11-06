import express from 'express'
import { config } from 'dotenv'
import { userss } from './routers/users.routers.js';

config()
const port = process.env.PORT||3001
const app = express()
app.use(express.json())
app.use('/users',userss)



app.listen(port,()=>{
    console.log(`Server is running on ${port} port`);
})

