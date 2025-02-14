const express = require('express');

const router = express.Router();
const postController = require("../controllers/postController");

// middlewares
const notFound = require("../middlewares/notFound");
const errorsHandler = require("../middlewares/errorsHandler");

// index
router.get('/', postController.index);

// show
router.get('/:id', notFound, errorsHandler, postController.show);

// store
router.post('/', postController.store);

// update
router.put('/:id', postController.update);

// modify
router.patch('/:id', postController.modify);

// destroy
router.delete('/:id', postController.destroy);

module.exports = router;