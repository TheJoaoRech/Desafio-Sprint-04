const EmployeeRepository = require('../repository/EmployeeRepository');
const Employee = require('../schema/EmployeeSchema');

class EmployeeService {
	//create employee
	async create(payload) {
		const result = await EmployeeRepository.create(payload);
		return result;
	}
}
module.exports = new EmployeeService();