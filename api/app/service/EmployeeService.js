const EmployeeRepository = require('../repository/EmployeeRepository');
const Employee = require('../schema/EmployeeSchema');
const moment = require('moment');



class EmployeeService {
	//create employee
	async create(payload) {
		const result = await EmployeeRepository.create(payload);
		const birthdateFormat = moment(result.birthday, 'YYYY-MM-DD').format('DD/MM/YYYY');
		return result;
	}

	async listAll(payload) {
		const result = await EmployeeRepository.listAll(payload);
		const birthdateFormat = moment(result.birthday, 'YYYY-MM-DD').format('DD/MM/YYYY');
		const newResult = {
			employee_id: result[0]._id,
			name: result[0].name,
			cpf: result[0].cpf,
			office: result[0].office,
			situation: result[0].situation,
			birthday: result[0].birthday,
			createdAt: result[0].createdAt,
			updatedAt: result[0]. updatedAt
		};
		return newResult;
	}
}
module.exports = new EmployeeService();