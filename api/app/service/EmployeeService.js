const EmployeeRepository = require('../repository/EmployeeRepository');
const Employee = require('../schema/EmployeeSchema');
const moment = require('moment');



class EmployeeService {
	//create employee
	async create(payload) {
		const result = await EmployeeRepository.create(payload);
		const birthdateFormat = moment(result.birthdate, 'YYYY-MM-DD').format('DD/MM/YYYY');
		return result;
	}

	async listAll(payload) {
		const result = await EmployeeRepository.listAll(payload);
		const birthdateFormat = moment(result.birthdate, 'YYYY-MM-DD').format('DD/MM/YYYY');
		return result;
	}
}
module.exports = new EmployeeService();