var mongoose = require('mongoose');

//define the object schema
var articleSchema = new mongoose.Schema( {
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title is required'
	}
	content: {
		type: String,
		default: '',
		trim: true
	 
});

//make it public to let controller see
module.exports = mongoose.model('Article', articleSchema);