let express = require('express');
let router = express.Router();

const ctrlBlog = require('../controllers/blog');
const ctrlHome = require('../controllers/home');

/* Home Pages */
router.get('/', ctrlHome.homeblog);

/* Blog Pages */
router.get('/blogList', ctrlBlog.bloglist);
router.get('/addBlog', ctrlBlog.blogadd);

module.exports = router;