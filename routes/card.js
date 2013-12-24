/*
Post a new Card
*/

var Category = require('../schemas/category');
var ObjectId = require('mongoose').Types.ObjectId; 

exports.add = function(req, res){
	var card = {};
	for(var data in req.body){
		card[data] = req.body[data];
	}
	Category.findById(ObjectId(req.body.categoryId)).exec(function(err,category){
		category.cards.push(card);
		category.save(function(err){
			if(err){
				console.log(err);
				res.status(500).json({status: 'failure'});
			}else{
				res.json({status: 'success'});
			}
		});
	});

};
 