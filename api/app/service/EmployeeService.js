const EmployeeRepository = require('../repository/EmployeeRepository');
const Employee = require('../schema/EmployeeSchema');

class EmployeeService {
	//create employee
	async create(payload) {
		const result = await EmployeeRepository.create(payload);
		return result;
	}

	async listAll(payload) {
		const result = await EmployeeRepository.listAll(payload);
		return result;
	}
}
module.exports = new EmployeeService();