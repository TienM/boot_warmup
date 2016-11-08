var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');
/*
 * GET home page.
 */
 exports.index = function ( req, res ){
   res.render( 'index', { title : 'Express Todo Example' });
 };

 exports.create = function ( req, res ){
   new Todo({
     content    : req.body.content,
     updated_at : Date.now()
   }).save( function( err, todo, count ){
     res.redirect( '/' );
   });
 };
