
/*
 * GET home page.
 */
var Category = require('../schemas/category');
var ObjectId = require('mongoose').Types.ObjectId; 

exports.index = function(req, res){
	Category.find().exec(function(err, categories){
		if(err){
			console.log(err);
			res.status(500).json({status:'failure'});
		}else{
			console.log(categories);
			res.render('index', { 
				title: 'Cards',
				categories: categories
			});
		}
	});
};

exports.category = function(req, res){
	Category.find().exec(function(err, categories){
		if(err){
			console.log(err);
			res.status(500).json({status:'failure'});
		}else{
			Category.findById(ObjectId(req.params.id)).exec(function(err, selectedCategory){
				console.log(selectedCategory);
				if(err){
					console.log(err);
					res.status(500).json({status:'failure'});
				}else{
					res.render('index', { 
						title: 'Cards',
						categories: categories,
						selectedCategory: selectedCategory
					});
				}
			});
		}
	});
};