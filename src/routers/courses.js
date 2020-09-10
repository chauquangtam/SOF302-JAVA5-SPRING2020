const express = require('express');
const router = express.Router();
const courseController=require('../app/controllers/CourseController');
router.get('/create', courseController.create);
router.get('/show', courseController.showLists);
 router.post('/store', courseController.saveAwait);

router.get('/:slug', courseController.show);
  module.exports=router;