import express from "express";
import "reflect-metadata"; // mikro-orm not need 
import { createConnection } from "typeorm";
import productsRoutes from "./routes/products";
import postsRoutes from "./routes/posts";
import usersRoutes from "./routes/users";
import redis from 'redis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import { origins, __prod__ } from "./consts";
import cors from 'cors'
import morgan from 'morgan'



( async() => {
    
    await createConnection()
    
    const app = express()
    app.use(morgan('dev'))
    app.use(cors({origin:origins,credentials:true}))
    const RedisStore = connectRedis(session)
    const redisClient = redis.createClient()
    
    app.use(
      session({
        name:'qid',
        store: new RedisStore({ 
            client: redisClient,
            disableTouch:true
         }),
         cookie:{
            maxAge:1000*60*60*24*365*10, // 10 años as max age
            httpOnly:true,
            secure:__prod__,
            sameSite:'lax'
        },
        saveUninitialized: false,
        secret: 'toojj esta es my secret value yeahhh 45 01',
        resave: false,
      })
    )

    app.use(express.json())
    
    app.use('/products',productsRoutes)
    app.use('/posts',postsRoutes)
    app.use('/users',usersRoutes)
    app.use((req,res)=>{
        res.send('<h2>Ruta no definnida<h2>')
    })
    
    app.listen(5000,()=>{
        console.log('running on http://localhost:5000');
        
    })

})()

