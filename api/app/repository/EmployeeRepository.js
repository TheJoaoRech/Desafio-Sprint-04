const EmployeeSchema = require('../schema/EmployeeSchema');

class PeopleRepository{
	async create(payload) {
		return await EmployeeSchema.create(payload);
	}
	async listAll(payload) {
		return await EmployeeSchema.find(payload);
	}
	async getById(payload) {
		return await EmployeeSchema.findById(payload);
	}
	async updateEmployee(payload, id) {
		return await EmployeeSchema.findByIdAndUpdate(payload, id);
	}	
	async deleteEmployee(payload) {
		return await EmployeeSchema.findByIdAndDelete(payload);
	}

}

module.exports = new PeopleRepository();