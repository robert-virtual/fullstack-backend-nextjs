import { Post } from "../entity/Post"
import {RequestHandler} from 'express'

// crud
// create
export const createPost:RequestHandler = async (req,res)=>{

    const {content} = req.body 
    if (content === "") {
        return res.status(400).json({
            error:'post vacio'
        })
    }
    
    const post = await Post.create({content}).save()
    res.status(201).json({
        post
    })
}
// read
export const getPosts:RequestHandler = async (req,res) => {
    const posts = await Post.find()
    res.json({
        posts
    })
}
// Update CRUD
export const updatePost:RequestHandler = async (req,res) => {
    const {content} = req.body 
    const {id} = req.params
    try {
        
        const post = await Post.update(id,{content})
        // const post = await Post.findOne(id)
        // post.content = content
        // await post.save()
        res.json({
            post
        })
        
    } catch (error) {
        res.json({
            error:error.details
        })
        
    }
}
// delete
export const deletePost:RequestHandler = async (req,res) => {
    const {id} = req.params
    const posts = await Post.delete(id)
    res.json({
        posts
    })
}
