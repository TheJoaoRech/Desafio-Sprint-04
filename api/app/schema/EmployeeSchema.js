const mongoose = require('mongoose'); 


const EmployeeSchema = new mongoose.Schema({
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
