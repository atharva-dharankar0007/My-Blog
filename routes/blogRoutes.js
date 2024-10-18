const express = require('express')
const { getAllBlogsController, createBlogsController, updateBlogsController, getBlogsByIdController, deleteBlogsController, userBlogControlller } = require('../controllers/blogController')


//router object
const router = express.Router()

//routes
//all blogs
router.get('/all-blog', getAllBlogsController)

//create blog
router.post('/create-blog', createBlogsController)

//update
router.put('/update-blog/:id', updateBlogsController)

//single blog details
router.get('/get-blog/:id', getBlogsByIdController)
//delete
router.delete('/delete-blog/:id', deleteBlogsController)

router.get("/user-blog/:id", userBlogControlller);

module.exports = router