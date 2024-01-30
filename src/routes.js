const express = require('express'); //OK
const multer = require('multer');
const uploadConfig = require('./config/upload');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

//Ao acessar a rota /posts através do método post executa o método store do controller
routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

// Rota do Like
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;