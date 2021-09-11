import { Router } from "express";
import { createPost, deletePost, getPosts, updatePost } from "../controllers/posts";
const router = Router()

// CRUD
router.post('/',createPost)
router.get('/',getPosts)
router.put('/',updatePost)
router.delete('/',deletePost)


export default router
