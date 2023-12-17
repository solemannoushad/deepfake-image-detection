import express from "express"
import Blog from '../models/Blog.js'

const router = express.Router();

router.get('/', async (req, res)=>{
    try {
        const blogs = await Blog.find();
        res.send(blogs);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Error Occured");
        
    }
})

router.get('/:id', async (req, res)=>{
    try {
        const blogs = await Blog.findById(req.params.id)
        res.send(blogs);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Error Occured");
        
    }
})


router.post('/addBlog', async (req, res)=>{

    try {
        const {title, description, imgUrl} = req.body;
        const blogs = await Blog.create({
            title,
            description,
            imgUrl
        })
        res.send(blogs);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Error Occured");
        
    }
})

// router.get('/getnotes' , fetchUser ,async (req , res)=>{
//     try{
//         const notes = await Notes.find({user: req.user.id});
//         res.send(notes);
//     }catch(error){
//         console.log(error.message);
//         res.status(500).send("Internal Error Occured");
//     }
// })


export default router;