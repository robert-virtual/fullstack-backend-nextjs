import { Router } from "express";
const router = Router()



router.get('/',(req,res)=>{
    res.send('productos')
})


export default router
