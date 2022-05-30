const EmployeeRepository = require('../repository/EmployeeRepository');

class EmployeeService {

	async create(payload) {
		const result = await EmployeeRepository.create(payload);

		return result;
	}

	async listAll(payload) {
		const result = await EmployeeRepository.listAll(payload);

		return result;
	}

	async getById(payload) {
		const result = await EmployeeRepository.getById(payload);
		return result;
	}

	async update(payload, id) {
		const result = await EmployeeRepository.updateEmployee(payload, id);
		return result;
	}

	async delete(payload) {
		const result = await EmployeeRepository.deleteEmployee(payload);
	}

}

module.exports = new EmployeeService();