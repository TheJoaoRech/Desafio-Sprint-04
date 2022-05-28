const mongoose = require('mongoose'); 


const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
<<<<<<< HEAD

=======
	// employee_id_fk: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'Employee',
	// 	required: true
	// },
>>>>>>> ef0d2f3ad9b29cffaba0332a57ad24f254b9a34e
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
