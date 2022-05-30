const mongoose = require('mongoose'); 
const mongoosePaginate = require('mongoose-paginate-v2');



const EmployeeSchema = new mongoose.Schema({

	// _id: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	default: uuidv4,
	// },

	name: {
		type: String,
		required: true
	},
	cpf: {
		type: String,
		required: [true, 'cpf is required'],
		unique: true,
		minlength: 11,
		maxlength: 11
	},
	office: {
		type: String,
		enum: ['gerente', 'vendedor', 'caixa'], 
		required: true
	},
	situation: {
		type: String,
		enum: ['activate', 'desactivate'],
		default: 'activate',
		required: true
	},
	birthday: {
		type: Date,
		required: true,
	},
	
},
{timestamps: true, versionKey: false}
);

EmployeeSchema.plugin(mongoosePaginate);

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;
