const mongoose = require('mongoose'); 
const { v4: uuidv4 } = require('uuid');
const mongoosePaginate = require('mongoose-paginate-v2');

const EmployeeSchema = new mongoose.Schema({

	// _id: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// },

	name: {
		type: String,
		required: true
	},
	cpf: {
		type: String,
		required: true,
		unique: true 
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