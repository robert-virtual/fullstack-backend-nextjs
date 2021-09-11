import { Router } from "express";
const router = Router()
import {body as check} from 'express-validator'
import { getMyUser, login, register } from "../controllers/users";

let badPasswd = 'Debe tener minimo 8 caracteres',
badEmail = 'Debe enviar un correo valido',
badName = 'Nombre debe tener minimo 2 caracteres'

// /users/
router.get('/me',getMyUser)
router.post(
    '/register',
    check('name',badName).isLength({min:2}),
    check('email',badEmail).isEmail(),
    check('password',badPasswd).isLength({min:8}),
    register
)

router.post(
    '/login',
    check('email',badEmail).isEmail(),
    check('password',badPasswd).isLength({min:8}),
    login
)


export default router
