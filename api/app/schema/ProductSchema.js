const mongoose = require('mongoose'); 
const mongoosePaginate = require('mongoose-paginate-v2');

const ProductSchema = new mongoose.Schema({

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

	employee_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Employee',
		required: true
	}

},
{versionKey: false}
);

ProductSchema.plugin(mongoosePaginate);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
