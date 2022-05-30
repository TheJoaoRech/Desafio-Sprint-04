const mongoose = require('mongoose'); 
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
const EmployeeSchema = new mongoose.Schema({

	name: {
		type: String,
		required: true
	},
	cpf: {
		type: String,
		required: [true, 'cpf is required'],
		unique: [true, 'This cpf already exists'],
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
		type: String,
		required: true,
	},
	
},
{timestamps: true, versionKey: false}
);

EmployeeSchema.plugin(mongoosePaginate);

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;