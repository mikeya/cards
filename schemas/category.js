var mongoose = require('mongoose');

module.exports = mongoose.model('Category',{
	name: String,
	parentId: String,
	cards: Array
});
