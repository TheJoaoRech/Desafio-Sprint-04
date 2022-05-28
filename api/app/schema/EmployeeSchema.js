const mongoose = require('mongoose'); 
const { v4: uuidv4 } = require('uuid');


const EmployeeSchema = new mongoose.Schema({
	// employee_id: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// },

	employee_id: {
		type: String,
		default: uuidv4,
	},

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

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;
