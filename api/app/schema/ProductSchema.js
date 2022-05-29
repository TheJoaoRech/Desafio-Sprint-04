const mongoose = require('mongoose'); 
const { v4: uuidv4 } = require('uuid');


const ProductSchema = new mongoose.Schema({

	_id: {
		type: String,
		default: uuidv4,
	},

	name: {
		type: String,
		required: true
	},

	category: {
		type: String,
		required: true,
	},
	
	price: {
		type: String,
		required: true
	},	

	// employeeProduct: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'Employee',
	// 	required: true
	// },


},
{versionKey: false}
);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
