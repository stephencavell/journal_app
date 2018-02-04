
//imports

const express = require('express');
const router = express.Router();

// require controller module
const post_controller = require('../controllers/postController');

//Posts Routes//

//Retrieve all posts//
router.get('/posts', post_controller.get_posts_list);

//Retrieve one post by id
router.get('/posts/:post_id', post_controller.get_post_by_id);

//Create new post//
router.post('/posts', post_controller.create_post);

//update existing post//
router.put('/posts/:post_id', post_controller.update_post);

//delete existing post//
router.delete('/posts/:post_id', post_controller.delete_post);

module.exports = router;