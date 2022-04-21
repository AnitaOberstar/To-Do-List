const express = require('express');

const router = express.Router();

const { create, read, removeTodo } = require('../controller/index');

router.get('/todos', read);
router.post('/todo/create', create);
router.delete('/todo/:id', removeTodo);

module.exports = router;
