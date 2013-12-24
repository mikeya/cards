/*
Create new Category
*/
var Category = require('../schemas/category');

exports.add = function(req, res){
  var newCategory = new Category();
  console.log(req.body);
  for(var data in req.body){
		newCategory[data] = req.body[data];
	}
	console.log(newCategory);
	newCategory.save(function(err){
		if(err){
			console.log(err);
			res.status(500).json({status: 'failure'});
		}else{
			res.json({status: 'success'});
		}
	});
};
 