const mongoose = require('mongoose'); 


const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	// employee_id_fk: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'Employee',
	// 	required: true
	// },
	category: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true
	},	
},
{versionKey: false}
);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
