const EmployeeSchema = require('../schema/EmployeeSchema');

class PeopleRepository{
	async create(payload) {
		return await EmployeeSchema.create(payload);
	}
	async listAll(payload) {
		return await EmployeeSchema.paginate({payload}, {limit: 25});
	}
	async getById(payload) {
		return await EmployeeSchema.findById(payload);
	}
	async updateEmployee(id, payload) {
		return await EmployeeSchema.findByIdAndUpdate(id, payload);
	}	
	async deleteEmployee(payload) {
		return await EmployeeSchema.findByIdAndDelete(payload);
	}

}

module.exports = new PeopleRepository();