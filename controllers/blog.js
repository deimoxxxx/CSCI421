/* GET Add Blog page */
module.exports.blogadd = function(req, res) {
    res.render('addBlog', {title: 'Add Blog'});  
};

/* GET Blog List page */
module.exports.bloglist = function(req, res) {
    res.render('blogList', {title: 'Blog List'});    
};

