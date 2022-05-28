const EmployeeSchema = require('../schema/EmployeeSchema');

class PeopleRepository{
	async create(payload) {
		return await EmployeeSchema.create(payload);
	}
	async listAll(payload) {
		return await EmployeeSchema.find(payload);
	}
}

module.exports = new PeopleRepository();